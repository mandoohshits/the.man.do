/* ── TAB NAVIGATION ── */
    function switchTab(id, btn) {
      document.querySelectorAll('.dept-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.dept-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + id).classList.add('active');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const firstTab = document.querySelector('.dept-tab');
      const firstPanel = document.getElementById('panel-concepts');
      if (firstTab && firstPanel) {
        firstTab.classList.add('active');
        firstPanel.classList.add('active');
      }
      listenToFirebase();
    });

    function toggleChat() {
      const box = document.getElementById('chatBox');
      const btn = document.getElementById('chatBtn');
      box.classList.toggle('active');
      btn.textContent = box.classList.contains('active') ? 'CLOSE' : 'MSG';
    }

    function switchFeature(id, btn) {
      document.querySelectorAll('.feature-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.feature-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + id).classList.add('active');
    }

    /* ── REALTIME FIREBASE SYSTEM ── */
    const ADMIN_NAME  = 'mandooh';
    const VALID_USERS = ['mandooh', 'minhaj', 'irappi', 'ummi', 'jagzzz'];

    let currentUser = null;
    let viewingAs   = null;
    let DB          = {};

    const firebaseConfig = {
      apiKey: "AIzaSyDu8b0WNWBmwc6KF-5CWZi_kJNEf9JQVos",
      authDomain: "themando-31bb4.firebaseapp.com",
      databaseURL: "https://themando-31bb4-default-rtdb.firebaseio.com",
      projectId: "themando-31bb4",
      storageBucket: "themando-31bb4.firebasestorage.app",
      messagingSenderId: "1053943854976",
      appId: "1:1053943854976:web:fd26ae659ee4f43e37f365",
      measurementId: "G-E75G63N8SB"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    function initUser(u) {
      if (!DB[u]) DB[u] = { tasks: [], budget: [], bucket: { my: [], shared: [] } };
      if (!DB[u].tasks) DB[u].tasks = [];
      if (!DB[u].budget) DB[u].budget = [];
      if (!DB[u].bucket) DB[u].bucket = { my: [], shared: [] };
      if (!DB[u].bucket.my) DB[u].bucket.my = [];
      if (!DB[u].bucket.shared) DB[u].bucket.shared = [];
    }

    function listenToFirebase() {
      db.ref('app_data').on('value', (snapshot) => {
        DB = snapshot.val() || {};
        VALID_USERS.forEach(initUser);
        if (viewingAs) {
          renderAll();
        }
      });
    }

    function dbSave() {
      db.ref('app_data').set(DB);
    }

    function enterBoard() {
      const name = document.getElementById('nameInput').value.trim().toLowerCase();
      const err  = document.getElementById('whoError');
      if (!VALID_USERS.includes(name)) {
        err.classList.add('show');
        setTimeout(() => err.classList.remove('show'), 2000);
        return;
      }
      currentUser = name;
      viewingAs   = name;
      document.getElementById('whoScreen').style.display = 'none';
      document.getElementById('taskBoard').style.display = 'flex';
      document.getElementById('boardName').textContent = name.toUpperCase();

      if (name === ADMIN_NAME) {
        buildAdminTabs();
        document.getElementById('assignRow').style.display = 'flex';
        populateAssign();
      }

      renderAll();
    }

    function buildAdminTabs() {
      const wrap = document.getElementById('adminTabs');
      wrap.classList.add('show');
      wrap.innerHTML = VALID_USERS.map(u => `
        <button class="user-tab-btn ${u === currentUser ? 'active' : ''}" onclick="adminView('${u}', this)">
          ${u.toUpperCase()}
        </button>
      `).join('');
    }

    function adminView(name, btn) {
      document.querySelectorAll('.user-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      viewingAs = name;
      document.getElementById('boardName').textContent = name.toUpperCase();
      renderAll();
    }

    function populateAssign() {
      const select = document.getElementById('assignSelect');
      select.innerHTML = VALID_USERS.map(u => `
        <option value="${u}">${u === currentUser ? 'For Myself' : 'Assign to: ' + u.toUpperCase()}</option>
      `).join('');
    }

    function switchUser() {
      currentUser = null;
      viewingAs = null;
      document.getElementById('taskBoard').style.display = 'none';
      document.getElementById('whoScreen').style.display = 'flex';
      document.getElementById('nameInput').value = '';
      document.getElementById('adminTabs').classList.remove('show');
      document.getElementById('adminTabs').innerHTML = '';
      document.getElementById('assignRow').style.display = 'none';
    }

    function renderAll() {
      renderTasks();
      renderBudget();
      renderBucket();
    }

    /* ── TASKS LOGIC ── */
    function addTask() {
      const text     = document.getElementById('taskInput').value.trim();
      const date     = document.getElementById('taskDate').value;
      const assignTo = currentUser === ADMIN_NAME
        ? (document.getElementById('assignSelect').value || currentUser)
        : currentUser;

      if (!text) return;
      initUser(assignTo);

      DB[assignTo].tasks.push({
        id: Date.now().toString(),
        text,
        due: date || null,
        status: 'pending',
        addedBy: currentUser,
      });

      dbSave();
      document.getElementById('taskInput').value = '';
      document.getElementById('taskDate').value  = '';
      renderTasks();
    }

    function cycleStatus(id) {
      const task = (DB[viewingAs]?.tasks || []).find(t => t.id === id);
      if (!task) return;
      task.status = { pending: 'progress', progress: 'done', done: 'pending' }[task.status];
      dbSave();
      renderTasks();
    }

    function deleteTask(id) {
      if (!DB[viewingAs]?.tasks) return;
      DB[viewingAs].tasks = DB[viewingAs].tasks.filter(t => t.id !== id);
      dbSave();
      renderTasks();
    }

    function renderTasks() {
      initUser(viewingAs);
      const tasks    = DB[viewingAs].tasks;
      const mine     = tasks.filter(t => !t.addedBy || t.addedBy === viewingAs);
      const incoming = tasks.filter(t => t.addedBy && t.addedBy !== viewingAs);
      const canEdit  = currentUser === ADMIN_NAME || viewingAs === currentUser;

      const p = tasks.filter(t => t.status === 'pending').length;
      const r = tasks.filter(t => t.status === 'progress').length;
      const d = tasks.filter(t => t.status === 'done').length;
      document.getElementById('taskStats').innerHTML = `
        <span class="stat-pill pending">${p} Pending</span>
        <span class="stat-pill progress">${r} In Progress</span>
        <span class="stat-pill done">${d} Done</span>
      `;

      const wrap = document.getElementById('taskSections');
      wrap.innerHTML = '';

      if (tasks.length === 0) {
        wrap.innerHTML = `<div class="empty-state" style="padding:30px 0;text-align:center;font-family:var(--font-mono);font-size:0.65rem;color:rgba(240,236,224,0.2);letter-spacing:3px;text-transform:uppercase;">No tasks yet. Add something above.</div>`;
        return;
      }

      if (incoming.length) {
        const h = document.createElement('div');
        h.className = 'section-label';
        h.style.cssText = 'color:rgba(60,160,255,0.7);margin-bottom:8px;';
        h.textContent = '📥 ASSIGNED TO ME';
        wrap.appendChild(h);
        renderTaskGroup(wrap, incoming, canEdit);
      }

      if (mine.length) {
        const h = document.createElement('div');
        h.className = 'section-label';
        h.style.cssText = 'color:rgba(240,160,20,0.7);margin-top:28px;margin-bottom:8px;';
        h.textContent = '📋 MY TASKS';
        wrap.appendChild(h);
        renderTaskGroup(wrap, mine, canEdit);
      }
    }

    function renderTaskGroup(wrap, tasks, canEdit) {
      const order = ['progress', 'pending', 'done'];
      order.forEach(s => {
        tasks.filter(t => t.status === s).forEach(task => {
          const overdue = task.due && new Date(task.due) < new Date() && task.status !== 'done';
          const item = document.createElement('div');
          item.className = `task-item ${task.status === 'done' ? 'done-item' : ''}`;
          item.innerHTML = `
            <div class="task-dot ${task.status}" onclick="${canEdit ? `cycleStatus('${task.id}')` : ''}" title="Click to change status"></div>
            <div class="task-body">
              <div class="task-text">${escHtml(task.text)}</div>
              <div class="task-meta">
                ${task.due ? `<span class="task-due ${overdue ? 'overdue' : ''}">${overdue ? '⚠ ' : ''}${fmtDate(task.due)}</span>` : ''}
                ${task.addedBy && task.addedBy !== viewingAs ? `<span>from ${task.addedBy}</span>` : ''}
                ${canEdit ? `<button class="status-btn ${task.status}" onclick="cycleStatus('${task.id}')">${statusLabel(task.status)}</button>` : ''}
              </div>
            </div>
            ${canEdit ? `<button class="del-btn" onclick="deleteTask('${task.id}')">✕</button>` : ''}
          `;
          wrap.appendChild(item);
        });
      });
    }

    /* ── BUDGET LOGIC ── */
    function addBudget() {
      const type     = document.getElementById('budgetType').value;
      const label    = document.getElementById('budgetLabel').value.trim();
      const amount   = parseFloat(document.getElementById('budgetAmount').value);
      const date     = document.getElementById('budgetDate').value;
      const category = document.getElementById('budgetCategory').value.trim();

      if (!label || isNaN(amount) || amount <= 0) return;

      initUser(viewingAs);
      DB[viewingAs].budget.push({
        id: Date.now().toString(),
        type, label, amount,
        date: date || null,
        category: category || 'General',
        addedBy: currentUser,
      });

      dbSave();
      document.getElementById('budgetLabel').value    = '';
      document.getElementById('budgetAmount').value   = '';
      document.getElementById('budgetCategory').value = '';
      document.getElementById('budgetDate').value     = '';
      renderBudget();
    }

    function deleteBudget(id) {
      if (!DB[viewingAs]?.budget) return;
      DB[viewingAs].budget = DB[viewingAs].budget.filter(b => b.id !== id);
      dbSave();
      renderBudget();
    }

    function renderBudget() {
      initUser(viewingAs);
      const entries = DB[viewingAs].budget;
      const income  = entries.filter(e => e.type === 'income').reduce((s, e) => s + e.amount, 0);
      const expense = entries.filter(e => e.type === 'expense').reduce((s, e) => s + e.amount, 0);
      const balance = income - expense;
      const canEdit = currentUser === ADMIN_NAME || viewingAs === currentUser;

      document.getElementById('budgetSummary').innerHTML = `
        <div class="budget-card income">
          <div class="budget-card-label">Total Income</div>
          <div class="budget-card-amount">AED ${income.toLocaleString()}</div>
        </div>
        <div class="budget-card expense">
          <div class="budget-card-label">Total Expense</div>
          <div class="budget-card-amount">AED ${expense.toLocaleString()}</div>
        </div>
        <div class="budget-card balance">
          <div class="budget-card-label">Balance</div>
          <div class="budget-card-amount" style="color:${balance >= 0 ? 'rgba(80,200,100,0.9)' : 'rgba(220,80,60,0.8)'}">
            AED ${balance.toLocaleString()}
          </div>
        </div>
      `;

      const wrap = document.getElementById('budgetList');
      wrap.innerHTML = '';

      if (entries.length === 0) {
        wrap.innerHTML = `<div class="empty-state" style="padding:30px 0;text-align:center;font-family:var(--font-mono);font-size:0.65rem;color:rgba(240,236,224,0.2);letter-spacing:3px;text-transform:uppercase;">No budget entries yet. Track income and expenses above.</div>`;
        return;
      }

      const cats = [...new Set(entries.map(e => e.category))];
      cats.forEach(cat => {
        const catItems = entries.filter(e => e.category === cat);
        const h = document.createElement('div');
        h.className = 'section-label';
        h.textContent = cat;
        wrap.appendChild(h);

        catItems.forEach(e => {
          const item = document.createElement('div');
          item.className = 'budget-item';
          item.innerHTML = `
            <div class="budget-type-dot ${e.type}"></div>
            <div class="budget-item-body">
              <div class="budget-item-label">${escHtml(e.label)}</div>
              <div class="budget-item-meta">${e.type.toUpperCase()} ${e.date ? '· ' + fmtDate(e.date) : ''} ${e.addedBy && e.addedBy !== viewingAs ? '· added by ' + e.addedBy : ''}</div>
            </div>
            <div class="budget-amount ${e.type}">${e.type === 'income' ? '+' : '-'} AED ${e.amount.toLocaleString()}</div>
            ${canEdit ? `<button class="del-btn" onclick="deleteBudget('${e.id}')">✕</button>` : ''}
          `;
          wrap.appendChild(item);
        });
      });
    }

    /* ── BUCKET LIST LOGIC ── */
    function addBucket(type) {
      const inputId = type === 'my' ? 'myBucketInput' : 'sharedBucketInput';
      const tagId   = type === 'my' ? 'myBucketTag'   : 'sharedBucketTag';
      const text    = document.getElementById(inputId).value.trim();
      const tag     = document.getElementById(tagId).value;
      if (!text) return;

      initUser(viewingAs);
      const item = { id: Date.now().toString(), text, tag, done: false, addedBy: currentUser };

      if (type === 'shared') {
        DB[viewingAs].bucket.shared.push(item);
        if (viewingAs !== ADMIN_NAME) {
          initUser(ADMIN_NAME);
          DB[ADMIN_NAME].bucket.shared.push({ ...item, sharedWith: viewingAs });
        }
      } else {
        DB[viewingAs].bucket.my.push(item);
      }

      dbSave();
      document.getElementById(inputId).value = '';
      renderBucket();
    }

    function toggleBucket(type, id) {
      initUser(viewingAs);
      const list = DB[viewingAs].bucket[type] || [];
      const item = list.find(i => i.id === id);
      if (item) {
        item.done = !item.done;
        dbSave();
        renderBucket();
      }
    }

    function deleteBucket(type, id) {
      initUser(viewingAs);
      DB[viewingAs].bucket[type] = DB[viewingAs].bucket[type].filter(i => i.id !== id);
      dbSave();
      renderBucket();
    }

    function renderBucket() {
      initUser(viewingAs);
      const canEdit    = currentUser === ADMIN_NAME || viewingAs === currentUser;
      const myList     = DB[viewingAs].bucket.my     || [];
      const sharedList = DB[viewingAs].bucket.shared || [];

      renderBucketList('myBucketList', myList, 'my', canEdit);
      renderBucketList('sharedBucketList', sharedList, 'shared', canEdit);
    }

    function renderBucketList(wrapperId, items, type, canEdit) {
      const wrap = document.getElementById(wrapperId);
      wrap.innerHTML = '';

      if (items.length === 0) {
        wrap.innerHTML = `<div class="empty-state" style="padding:20px;text-align:center;font-family:var(--font-mono);font-size:0.65rem;color:rgba(240,236,224,0.2);">Nothing here yet.</div>`;
        return;
      }

      items.forEach(item => {
        const el = document.createElement('div');
        el.className = `bucket-item ${item.done ? 'done-bucket' : ''}`;
        el.innerHTML = `
          <button class="bucket-check" onclick="${canEdit ? `toggleBucket('${type}','${item.id}')` : ''}">${item.done ? '✓' : ''}</button>
          <div class="bucket-text">${escHtml(item.text)}</div>
          <span class="bucket-tag">${item.tag}</span>
          ${item.sharedWith ? `<span class="bucket-tag" style="color:rgba(240,160,20,0.4);">${item.sharedWith}</span>` : ''}
          ${canEdit ? `<button class="del-btn" onclick="deleteBucket('${type}','${item.id}')">✕</button>` : ''}
        `;
        wrap.appendChild(el);
      });
    }

    /* ── HELPERS ── */
    function statusLabel(s) {
      return { pending: 'Pending', progress: 'In Progress', done: 'Done' }[s] || s;
    }

    function fmtDate(d) {
      return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function escHtml(str) {
      if (!str) return '';
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }