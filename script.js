/* STATE */
const STORAGE_KEY = 'bkk_pty_custom_trip_v5';
const state = { expenses: [], checklist: {} };
function loadState(){ try{ const r = localStorage.getItem(STORAGE_KEY); if(r){ Object.assign(state, JSON.parse(r)); } }catch(e){} }
function saveState(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){} }
loadState();

/* COUNTDOWN */
// 已經為您設定為 2026 年出發！
const TARGET = new Date('2026-07-05T19:55:00+08:00').getTime(); 
function tick(){
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff/86400000), h = Math.floor((diff%86400000)/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
  document.getElementById('cd-d').textContent = String(d).padStart(2,'0');
  document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
}
if(document.getElementById('cd-d')) { tick(); setInterval(tick, 1000); }

/* TABS */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === t));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.toggle('active', s.id === t));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* DAYS  */
const days = [
  {
    pty:false, num:'Day 1', date:'7/5', title:'夜抵曼谷', meta:'BKK · 入住 BTS Sena Nikhom (N12) 附近 Airbnb',
    slots:[
      { time:'22:40', dur:'40min', title:'抵達曼谷機場', desc:'出示 TDAC 過海關、領行李，在機場換小額泰銖與開通 eSIM。', tags:['機場'], map:'Suvarnabhumi+Airport' },
      { time:'23:30', dur:'55min', title:'搭車前往 Airbnb', desc:'<span class="em">5 人團強烈建議叫 Grab XL (7人座)</span>。直接將 Airbnb 地址或 BTS Sena Nikhom (N12) 提供給司機導航。', tags:['交通'], map:'13.839194,100.573833' },
      { time:'00:40', dur:'-', title:'入住休息', desc:'第一晚剛抵達不排行程，抵達 Sena Nikhom 站附近 Airbnb 後直接辦理入住並休息。若肚子餓，可先在附近便利商店簡單買宵夜。', tags:['休息'], map:'13.839194,100.573833' }
    ],
    tip:'<strong>機場進市區：</strong>一台 Grab XL 約 500-700 THB，比分兩台一般計程車更方便且不易走散。'
  },
  {
    pty:false, num:'Day 2', date:'7/6', title:'經典船麵 + 暹羅商圈血拼 + 按摩', meta:'BKK · 購物與夜市',
    slots:[
      { time:'10:00', dur:'1.5hr', title:'<span class="pin">📍</span>早午餐：Baan Kuay Tiew Ruathong', desc:'先到勝利紀念碑站吃您清單上的經典泰式船麵，吃飽再戰商圈！', tags:['美食','必吃'], map:'Baan+Kuay+Tiew+Ruathong' },
      { time:'11:45', dur:'2.5hr', title:'<span class="pin">📍</span>Siam Square 質感選物店', desc:'從勝利紀念碑搭 BTS 只要 3 站就到 Siam。<br><strong>必逛清單：</strong> <strong>Seek \'N Keep Club</strong>、<strong>Stickerland</strong>、<strong>Frank Garcon</strong>', tags:['購物','必逛'], map:'Siam+Square+One' },
      { time:'14:15', dur:'1.5hr', title:'<span class="pin">📍</span>下午茶/點心：Pad Thai Mae Thong Bai', desc:'逛累了就在 Siam 商圈內吃泰式炒河粉休息一下。', tags:['美食'], map:'Pad+Thai+Mae+Thong+Bai' },
      { time:'15:30', dur:'2hr', title:'<span class="pin">📍</span>中央世界購物商場 CentralWorld', desc:'步行前往曼谷最大商場之一，各種泰國設計師品牌都在這。', tags:['購物'], map:'CentralWorld' },
      { time:'18:00', dur:'2.5hr', title:'<span class="pin">📍</span>Jodd Fairs Ratchada 喬德夜市', desc:'搭 MRT 到 Phra Ram 9 站。曼谷最火紅夜市。<span class="em">必吃：火山排骨、水果冰沙、生醃海鮮</span>。', tags:['美食','夜市'], map:'Jodd+Fairs+Ratchada' },
      { time:'21:00', dur:'1.5hr', title:'<span class="pin">📍</span>One More Thai Massage & Spa', desc:'按摩結束後，還可享用泰式傳統茶點，距 BTS 奇隆站（Chit Lom）僅1分鐘步行距離，便利好找不迷路', tags:['放鬆'], map:'BTS+Nana+Station' }
    ]
  },
  {
    pty:false, num:'Day 3', date:'7/7', title:'大皇宮 + 恐龍體驗 + 鄭王廟 + 按摩', meta:'BKK · 舊城河畔一日遊',
    slots:[
      { time:'08:30', dur:'2.5hr', title:'<span class="pin">📍</span>大皇宮與玉佛寺 (一早避暑)', desc:'<span class="em">服裝注意：需過膝長褲/長裙與有袖上衣！</span>趁剛開門遊客少、天氣不那麼熱時去參觀。', tags:['必去','文化'], map:'Grand+Palace+Bangkok' },
      { time:'11:15', dur:'1.5hr', title:'<span class="pin">📍</span>Song Wat Rd 頌瓦路午餐', desc:'距離大皇宮不遠，曼谷新興文青老街，找間涼爽的咖啡廳或小吃店休息吃午餐。', tags:['文化'], map:'Song+Wat+Road' },
      { time:'13:00', dur:'30min', title:'搭船前往 Asiatique 碼頭', desc:'從碼頭搭船沿昭披耶河往南。', tags:['交通'] },
      { time:'13:30', dur:'2hr', title:'<span class="pin">📍</span>侏羅紀恐龍博物館', desc:'<span class="em">嚴格控管 2 小時。</span>在冷氣房沉浸式體驗實境恐龍，建議線上買票。', tags:['必玩'], map:'Asiatique+The+Riverfront' },
      { time:'15:30', dur:'45min', title:'搭船前往鄭王廟', desc:'搭船順著河往北看風景，抵達鄭王廟剛好是下午最舒服的時間。', tags:['交通'] },
      { time:'16:15', dur:'2hr', title:'<span class="pin">📍</span>鄭王廟 Wat Arun 看夕陽', desc:'推薦在門口租泰服！這個時間點光線最美，一路拍照待到 18:00 欣賞河畔絕美夕陽。', tags:['必去','文化'], map:'Wat+Arun' },
      { time:'18:45', dur:'2.5hr', title:'<span class="pin">📍</span>朱拉隆功美食街狂歡', desc:'<strong>戰鬥路線：</strong>先抽 <strong>Jeh O Chula (MAMA麵)</strong> → 等待時吃 <strong>朱拉50巷廚房</strong> → 飯後甜點 <strong>Nueng Nom Nua</strong> 烤吐司！', tags:['美食','必吃'], map:'Jeh+O+Chula' },
      { time:'21:30', dur:'1.5hr', title:'<span class="pin">📍</span>全身泰式古法按摩', desc:'今天走了大皇宮又搭船，體力消耗極大。吃飽後回市區享受全身泰式按摩，把疲憊全消除。', tags:['放鬆'] }
    ],
    tip:'<strong>河畔動線超順：</strong> 早上大皇宮 → 中午文青街 → 下午侏羅紀 → 傍晚鄭王廟夕陽，全部都在昭披耶河畔，搭船銜接超級順！'
  },
  {
    pty:true, num:'Day 4', date:'7/8', title:'前進芭達雅 + 水上市場與海鮮', meta:'PTY · 移動日',
    slots:[
      { time:'10:30', dur:'2hr', title:'包車南下：曼谷 → 芭達雅', desc:'<span class="em">5 人團推薦直接包車</span>，不用搬行李轉車，門到門服務，直達芭達雅。', tags:['交通'] },
      { time:'13:00', dur:'2.5hr', title:'<span class="pin">📍</span>芭達雅四方水上市場', desc:'抵達芭達雅先不進市區，先順路去您清單上的 <strong>Pattaya Floating Market</strong>。體驗泰式水上船家風情。', tags:['景點'], map:'Pattaya+Floating+Market' },
      { time:'16:00', dur:'1hr', title:'<span class="pin">📍</span>入住 Rim Apartment Pattaya', desc:'前往您預訂的服務式公寓辦理 Check-in，放行李稍微休息。', tags:['住宿'], map:'Rim+Apartment+Pattaya' },
      { time:'17:30', dur:'2.5hr', title:'<span class="pin">📍</span>Lan Pho Na Kluea Market 海鮮大餐', desc:'前往您標記的蘭普海鮮市場。<strong>玩法：</strong>在市場內自己挑選活海鮮結帳 → 拿到外圍代客料理攤位代煮 → 找座位大快朵頤！', tags:['美食','必吃'], map:'Lan+Pho+Na+Kluea+Market' }
    ]
  },
  {
    pty:true, num:'Day 5', date:'7/9', title:'包團跳島水上活動 + 高階按摩', meta:'PTY · 玩水日',
    slots:[
      { time:'08:00', dur:'9hr', title:'🏄‍♂️ 預訂的包團水上活動', desc:'依照您預訂的包團行程進行水上活動（約 17:00 結束）。<br><span class="em">務必準備：高係數防曬乳、防水袋、暈船藥。</span>', tags:['水上','必玩'], map:'Pattaya+Beach' },
      { time:'17:30', dur:'1.5hr', title:'回公寓洗漱', desc:'玩水一整天會非常疲憊，回 Rim Apartment 洗掉海水與沙子。', tags:['休息'] },
      { time:'19:00', dur:'1.5hr', title:'晚餐：芭達雅市區海鮮或泰菜', desc:'推薦在芭達雅市區吃頓好的泰式料理補充體力。', tags:['美食'], map:'Terminal+21+Pattaya' },
      { time:'20:30', dur:'2hr', title:'<span class="pin">📍</span>芭達雅優質 Spa (如 Let\'s Relax)', desc:'玩水泡海水一整天，肌肉緊繃又可能曬傷。預約一場有冷氣、環境好的精油或泰式按摩完美收尾！', tags:['放鬆'], map:'Let\'s+Relax+Spa+Pattaya' }
    ]
  },
  {
    pty:true, num:'Day 6', date:'7/10 - 7/11', title:'曼谷 Big C 掃貨 + 凌晨飛機', meta:'PTY → BKK',
    slots:[
      { time:'09:30', dur:'30min', title:'退房出發', desc:'將在芭達雅的行李收拾好，辦理退房。', tags:['準備'], map:'Rim+Apartment+Pattaya' },
      { time:'10:00', dur:'2.5hr', title:'包車：芭達雅 → 曼谷市區', desc:'預訂包車直接開回曼谷市區（Chit Lom 區）。', tags:['交通'] },
      { time:'12:30', dur:'3hr', title:'<span class="pin">📍</span>Big C Supercenter Ratchadamri 大採買', desc:'抵達 Big C，行李可以暫放車上。<br><strong>目標：</strong>老大哥花生、手標泰奶、Pocky、薄荷棒、小老闆海苔... 買好買滿！', tags:['購物','必去'], map:'Big+C+Supercenter+Ratchadamri' },
      { time:'15:30', dur:'2.5hr', title:'市區最後按摩', desc:'大採買提著大包小包很累，商圈附近再按最後一次 2 小時放鬆，準備搭紅眼班機。', tags:['放鬆'], map:'Let\'s+Relax+Spa+Central+World' },
      { time:'18:00', dur:'2hr', title:'最後曼谷晚餐', desc:'可以在 CentralWorld 附近商圈享用最後的泰國大餐。', tags:['美食'] },
      { time:'20:30', dur:'1.5hr', title:'前往素萬那普機場 (BKK)', desc:'搭乘包車或 Grab XL 前往機場。', tags:['交通'] },
      { time:'22:00', dur:'3hr', title:'機場退稅與 Check-in', desc:'退稅單需先給外面海關蓋章（需出示購買物品），再進去託運。', tags:['機場'], map:'Suvarnabhumi+Airport' },
      { time:'01:35 (+1)', dur:'-', title:'✈️ 搭機返台', desc:'7/11 凌晨 01:35 班機起飛，帶著滿滿戰利品回台灣！', tags:['航班'] }
    ],
    tip:'這天的核心是 <strong>Big C 大採買</strong>！如果在前兩天買，要提著一箱零食去芭達雅再提回來，絕對崩潰。排在最後一天直接丟包車行李箱最聰明！'
  }
];

const dayWrap = document.getElementById('day-cards');
if(dayWrap) {
  days.forEach((day, idx) => {
    const card = document.createElement('div');
    card.className = 'day-card' + (day.pty ? ' pty' : '');
    card.innerHTML = `
      <div class="day-head${day.pty ? ' pty' : ''}" data-idx="${idx}">
        <div class="day-l">
          <div class="day-num">${day.num}${day.pty ? ' · 芭達雅' : ' · 曼谷'}</div>
          <div class="day-title">${day.title}</div>
          <div class="day-meta">${day.date} · ${day.meta}</div>
        </div>
        <div class="day-toggle">+</div>
      </div>
      <div class="day-body">
        ${day.slots.map(s => `
          <div class="slot">
            <div class="slot-time">${s.time}${s.dur && s.dur !== '-' ? `<span class="dur">${s.dur}</span>` : ''}</div>
            <div class="slot-body">
              <div class="slot-title">
                ${s.title}
                ${s.map ? `<a href="https://www.google.com/maps/search/?api=1&query=${s.map}" target="_blank" style="font-size:11px; color:var(--ocean); background:rgba(46,110,138,.1); padding:3px 8px; border-radius:4px; margin-left:8px; text-decoration:none; vertical-align:middle; display:inline-block;">🗺️ 地圖</a>` : ''}
              </div>
              <div class="slot-desc" style="margin-top:4px;">${s.desc}</div>
              <div>${(s.tags||[]).map(t => `<span class="slot-tag ${['必去','必吃','必看','必玩','必逛'].includes(t)?'s':['美食','文化','水上','放鬆'].includes(t)?'j':''}">${t}</span>`).join('')}</div>
            </div>
          </div>
        `).join('')}
        ${day.tip ? `<div class="day-tip">${day.tip}</div>` : ''}
      </div>
    `;
    dayWrap.appendChild(card);
  });
  document.querySelectorAll('.day-head').forEach(h => {
    h.addEventListener('click', () => {
      h.parentElement.classList.toggle('open');
      h.classList.toggle('expanded');
      h.querySelector('.day-toggle').textContent = h.classList.contains('expanded') ? '×' : '+';
    });
  });
  // 預設展開 Day 2 讓您看新增的按摩行程
  document.querySelectorAll('.day-card')[1]?.classList.add('open');
  const h2 = document.querySelectorAll('.day-head')[1];
  if(h2){ h2.classList.add('expanded'); h2.querySelector('.day-toggle').textContent = '×'; }
}

/* HOTELS */
const hotels = [
  {
    name:'Sena Nikhom 站周邊 Airbnb',
    en:'Bangkok Airbnb',
    badge:'7/5 - 7/8',
    featured:false,
    region:'BTS Sena Nikhom (N12)',
    price:'已付',
    rec:'曼谷前三天住宿',
    total:'-',
    desc:'步行約 3 分鐘即可抵達 BTS Sena Nikhom (N12) 站，位於 Sukhumvit 線北段。',
    pros:['步行3分鐘到BTS','直達Siam商圈','5人入住'],
    map:'13.839194,100.573833'
  },
    
  {
    name:'Rim Apartment Pattaya', en:'Rim Apartment', badge:'7/8 - 7/10', featured:true,
    region:'芭達雅', price:'已預訂', rec:'芭達雅兩天住宿', total:'-',
    desc:'您清單中標記的服務式公寓。距離鬧區不遠，空間大，適合 5 人團入住。',
    pros:['您已標記','公寓式空間','評價優良'], map:'Rim+Apartment+Pattaya'
  }
];
const hotelList = document.getElementById('hotel-list');
if(hotelList) {
  hotelList.innerHTML = hotels.map(h => `
    <div class="hotel-card${h.featured ? ' featured' : ''}">
      ${h.badge ? `<div class="h-badge${h.badge.includes('7/5')?'':' spc'}">${h.badge}</div>` : ''}
      <div class="h-name">
        ${h.name}
        ${h.map ? `<a href="https://www.google.com/maps/search/?api=1&query=${h.map}" target="_blank" style="font-size:11px; color:var(--ocean); background:rgba(46,110,138,.1); padding:2px 6px; border-radius:4px; margin-left:6px; text-decoration:none;">🗺️</a>` : ''}
      </div>
      <div class="h-en">${h.en} · ${h.region}</div>
      <div class="h-desc"><strong style="color:var(--ocean)">時間：</strong>${h.rec}</div>
      <div class="h-desc">${h.desc}</div>
      <div class="h-pros">${h.pros.map(p => `<span>${p}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* TRANSIT */
const transitContent = document.getElementById('transit-content');
if(transitContent) {
  transitContent.innerHTML = `
    <div class="transit-card">
      <h3><span class="num">01</span>機場 ⇄ 曼谷市區（5 人）</h3>
      <table class="transit-table">
        <tr><td>Grab XL（7 人座）</td><td><span class="cost">600-1,000 THB / 車</span><br><strong>5 人團首選</strong>，一台搞定行李 + 全員直達 Sena Nikhom 站周邊 Airbnb。夜間抵達價格可能較高。</td></tr>
      </table>
    </div>
    <div class="transit-card">
      <h3><span class="num">02</span>曼谷 ⇄ 芭達雅 ⇄ 機場</h3>
      <table class="transit-table">
        <tr><td>私人包車 (Klook/KKday)</td><td><span class="cost">~3,000 THB / 車</span><br>5 人平分每人只要 600 泰銖。強烈建議 7/10 從芭達雅回曼谷市區 (Big C) 也包一台車，因為行李太多搭大眾運輸會瘋掉。</td></tr>
      </table>
    </div>
  `;
}

/* FOOD */
const foods = [
  { region:'bkk', name:'Jeh O Chula (MAMA麵)', price:'B200-400', loc:'朱拉隆功區', desc:'米其林必比登。海鮮冬蔭功 MAMA 麵。', stars:3, map:'Jeh+O+Chula' },
  { region:'bkk', name:'Jodd Fairs 喬德夜市', price:'多樣選擇', loc:'MRT Phra Ram 9', desc:'火山排骨、水果冰沙。曼谷必逛夜市。', stars:3, map:'Jodd+Fairs+Ratchada' },
  { region:'bkk', name:'Pad Thai Mae Thong Bai', price:'B200-400', loc:'Siam 商圈', desc:'精緻好拍的泰式炒河粉，逛街順便吃。', stars:2, map:'Pad+Thai+Mae+Thong+Bai' },
  { region:'bkk', name:'Baan Kuay Tiew Ruathong', price:'B1-200', loc:'勝利紀念碑', desc:'經典道地泰式船麵，一碗接一碗。', stars:2, map:'Baan+Kuay+Tiew+Ruathong' },
  { region:'bkk', name:'Nueng Nom Nua (烤吐司)', price:'B1-200', loc:'朱拉隆功區', desc:'曼谷最火紅的北海道鮮奶烤吐司甜點店。', stars:2, map:'Nueng+Nom+Nua+Banthat+Thong' },
  { region:'bkk', name:'PUNGDET 爆漿餐包', price:'B1-200', loc:'朱拉隆功區', desc:'超邪惡爆漿餐包，朱拉區必吃甜點之二。', stars:2, map:'PUNGDET+Banthat+Thong' },
  { region:'bkk', name:'朱拉50巷廚房 / Jimjoom99', price:'平價', loc:'朱拉隆功區', desc:'您標記的在地泰國菜名店，Jeh O Chula 備案。', stars:2, map:'Chula+50+Kitchen' },
  { region:'pty', name:'Lan Pho Na Kluea Market', price:'海鮮時價', loc:'芭達雅', desc:'<strong>芭達雅最強海鮮聖地</strong>。自選海鮮 + 旁邊餐廳代客料理。', stars:3, map:'Lan+Pho+Na+Kluea+Market' },
];
const foodContent = document.getElementById('food-content');
if(foodContent) {
  foodContent.innerHTML = `
    <div class="card" style="border-left:3px solid var(--gold)">
      <div class="card-title">專屬清單：您想去的愛店</div>
    </div>
    ${foods.map(f => `
      <div class="food-card${f.region==='pty'?' pty':''}">
        <div class="f-name">
          <span class="star">${'★'.repeat(f.stars)}</span>${f.name}
          ${f.map ? `<a href="https://www.google.com/maps/search/?api=1&query=${f.map}" target="_blank" style="font-size:11px; color:var(--ocean); background:rgba(46,110,138,.1); padding:2px 6px; border-radius:4px; margin-left:6px; text-decoration:none;">🗺️</a>` : ''}
          <span class="price">${f.price}</span>
        </div>
        
        <div class="f-desc">${f.desc}</div>
        <div class="f-loc">${f.region==='pty'?'🏖':'📍'} ${f.loc}</div>
      </div>
    `).join('')}
  `;
}

/* BUDGET */
const BUDGET_TOTAL = 50000;
const CAT_LABELS = { food:'🍜 餐飲', shop:'🛍 購物', attr:'🎫 景點', trans:'🚇 交通', stay:'🏠 住宿', other:'📌 其他' };
const CAT_CSS = { food:'food', shop:'shop', attr:'attr', trans:'', stay:'stay', other:'other' };

function renderBudget(){
  const budgetContent = document.getElementById('budget-content');
  if(!budgetContent) return;
  const total = state.expenses.reduce((s,e) => s + e.amount, 0);
  const pct = Math.min(100, (total / BUDGET_TOTAL) * 100);
  
  budgetContent.innerHTML = `
    <div class="budget-summary">
      <div class="b-lbl">5 人團共同支出</div>
      <div class="b-num">${total.toLocaleString()}<small>/ ${BUDGET_TOTAL.toLocaleString()} THB</small></div>
      <div class="b-meta">${pct.toFixed(1)}% used</div>
      <div class="budget-bar"><div class="budget-bar-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="expense-form">
      <div class="row">
        <select id="exp-cat">
          <option value="food">🍜 餐飲</option><option value="trans">🚇 交通</option>
          <option value="attr">🎫 景點</option><option value="other">📌 其他</option>
        </select>
        <input type="number" id="exp-amt" placeholder="金額 (THB)">
      </div>
      <div class="row"><input type="text" id="exp-note" placeholder="備註（例：Grab去夜市 5人）"></div>
      <button class="btn-primary" id="exp-add">+ 記一筆</button>
    </div>
    <div class="expense-list">
      <div class="expense-list-head"><span>紀錄</span>${state.expenses.length > 0 ? '<span class="clear" id="exp-clear" style="cursor:pointer; color:var(--spice);">清除</span>' : ''}</div>
      ${state.expenses.length === 0 ? `<div class="expense-empty">尚未記帳</div>` :
        state.expenses.slice().reverse().map(e => `
          <div class="exp-item">
            <span class="exp-cat ${CAT_CSS[e.category]}">${CAT_LABELS[e.category]}</span>
            <span class="exp-note">${e.note || '—'}</span>
            <span class="exp-amt">${e.amount.toLocaleString()}</span>
            <button class="exp-del" data-id="${e.id}">×</button>
          </div>
        `).join('')}
    </div>
  `;

  document.getElementById('exp-add')?.addEventListener('click', () => {
    const cat = document.getElementById('exp-cat').value;
    const amt = parseFloat(document.getElementById('exp-amt').value);
    const note = document.getElementById('exp-note').value.trim();
    if(!amt || amt <= 0) return;
    state.expenses.push({ id: Date.now()+'', category:cat, amount:amt, note, ts:Date.now() });
    saveState(); renderBudget();
  });
  document.querySelectorAll('.exp-del').forEach(btn => {
    btn.addEventListener('click', () => {
      state.expenses = state.expenses.filter(e => e.id !== btn.dataset.id);
      saveState(); renderBudget();
    });
  });
  document.getElementById('exp-clear')?.addEventListener('click', () => {
    if(confirm('清除所有紀錄？')){ state.expenses = []; saveState(); renderBudget(); }
  });
}
renderBudget();

/* CHECKLIST */
function refreshChecklist(){
  document.querySelectorAll('.cl-item').forEach(item => {
    item.classList.toggle('done', !!state.checklist[item.dataset.id]);
  });
}
document.querySelectorAll('.cl-item').forEach(item => {
  item.addEventListener('click', () => {
    state.checklist[item.dataset.id] = !state.checklist[item.dataset.id];
    saveState(); refreshChecklist();
  });
});
refreshChecklist();