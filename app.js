const foods=[
{name:"Oats",c:389,p:16.9,carb:66.3,f:6.9},{name:"Poha",c:130,p:2.6,carb:27,f:1.5},{name:"Upma",c:150,p:3.5,carb:25,f:4.5},{name:"Idli",c:146,p:4.5,carb:30,f:.7},{name:"Dosa",c:168,p:3.9,carb:29,f:3.7},{name:"Roti",c:297,p:10,carb:46,f:7},{name:"Brown Rice (cooked)",c:123,p:2.7,carb:25.6,f:1},{name:"Rice (cooked)",c:130,p:2.7,carb:28,f:.3},{name:"Quinoa (cooked)",c:120,p:4.4,carb:21.3,f:1.9},{name:"Dal (cooked)",c:116,p:9,carb:20,f:.4},{name:"Rajma (cooked)",c:127,p:8.7,carb:22.8,f:.5},{name:"Chole / Chickpeas (cooked)",c:164,p:8.9,carb:27.4,f:2.6},{name:"Soy Chunks (dry)",c:345,p:52,carb:33,f:.5},{name:"Paneer",c:265,p:18,carb:6,f:20},{name:"Tofu",c:76,p:8,carb:1.9,f:4.8},{name:"Egg",c:155,p:13,carb:1.1,f:11},{name:"Chicken Breast",c:165,p:31,carb:0,f:3.6},{name:"Fish",c:128,p:26,carb:0,f:2.7},{name:"Milk",c:61,p:3.2,carb:4.8,f:3.3},{name:"Curd",c:61,p:3.5,carb:4.7,f:3.3},{name:"Greek Yogurt",c:59,p:10.3,carb:3.6,f:.4},{name:"Almonds",c:579,p:21.2,carb:21.6,f:49.9},{name:"Peanuts",c:567,p:25.8,carb:16.1,f:49.2},{name:"Walnuts",c:654,p:15.2,carb:13.7,f:65.2},{name:"Chia Seeds",c:486,p:16.5,carb:42.1,f:30.7},{name:"Flax Seeds",c:534,p:18.3,carb:28.9,f:42.2},{name:"Banana",c:89,p:1.1,carb:22.8,f:.3},{name:"Apple",c:52,p:.3,carb:13.8,f:.2},{name:"Orange",c:47,p:.9,carb:11.8,f:.1},{name:"Papaya",c:43,p:.5,carb:10.8,f:.3},{name:"Guava",c:68,p:2.6,carb:14.3,f:1},{name:"Mango",c:60,p:.8,carb:15,f:.4},{name:"Sweet Potato",c:86,p:1.6,carb:20.1,f:.1},{name:"Potato (boiled)",c:87,p:1.9,carb:20.1,f:.1},{name:"Spinach",c:23,p:2.9,carb:3.6,f:.4},{name:"Broccoli",c:34,p:2.8,carb:6.6,f:.4},{name:"Carrot",c:41,p:.9,carb:9.6,f:.2},{name:"Cucumber",c:15,p:.7,carb:3.6,f:.1},{name:"Tomato",c:18,p:.9,carb:3.9,f:.2},{name:"Whole Wheat Bread",c:247,p:13,carb:41,f:4.2}
];

// Expanded food database (approximate per 100g values for wellness-planning UI).
foods.push(
{name:'Besan (gram flour)',c:387,p:22.4,carb:57.8,f:6.7},{name:'Moong Dal (cooked)',c:105,p:7,carb:19.2,f:.4},{name:'Masoor Dal (cooked)',c:116,p:9,carb:20.1,f:.4},{name:'Urad Dal (cooked)',c:116,p:7.9,carb:20.1,f:.4},{name:'Black Chana (cooked)',c:164,p:8.9,carb:27.4,f:2.6},{name:'Green Peas',c:81,p:5.4,carb:14.5,f:.4},{name:'Edamame',c:121,p:11.9,carb:8.9,f:5.2},{name:'Sprouted Moong',c:30,p:3,carb:6,f:.2},{name:'Millet (cooked)',c:119,p:3.5,carb:23.7,f:1},{name:'Ragi (finger millet)',c:336,p:7.3,carb:72,f:1.3},{name:'Bajra (pearl millet)',c:361,p:11.6,carb:67.5,f:5},{name:'Jowar (sorghum)',c:329,p:10.4,carb:72.1,f:3.1},{name:'Barley (cooked)',c:123,p:2.3,carb:28.2,f:.4},{name:'Corn (boiled)',c:96,p:3.4,carb:21,f:1.5},{name:'Muesli',c:360,p:10,carb:68,f:6},{name:'Peanut Butter',c:588,p:25,carb:20,f:50},{name:'Pumpkin Seeds',c:559,p:30.2,carb:10.7,f:49.1},{name:'Sunflower Seeds',c:584,p:20.8,carb:20,f:51.5},{name:'Sesame Seeds',c:573,p:17.7,carb:23.4,f:49.7},{name:'Cashews',c:553,p:18.2,carb:30.2,f:43.9},{name:'Pistachios',c:562,p:20.2,carb:27.2,f:45.3},{name:'Dates',c:282,p:2.5,carb:75,f:.4},{name:'Pomegranate',c:83,p:1.7,carb:18.7,f:1.2},{name:'Watermelon',c:30,p:.6,carb:7.6,f:.2},{name:'Pineapple',c:50,p:.5,carb:13.1,f:.1},{name:'Grapes',c:69,p:.7,carb:18.1,f:.2},{name:'Pear',c:57,p:.4,carb:15.2,f:.1},{name:'Kiwi',c:61,p:1.1,carb:14.7,f:.5},{name:'Strawberries',c:32,p:.7,carb:7.7,f:.3},{name:'Beetroot',c:43,p:1.6,carb:9.6,f:.2},{name:'Capsicum',c:31,p:1,carb:6,f:.3},{name:'Cauliflower',c:25,p:1.9,carb:5,f:.3},{name:'Cabbage',c:25,p:1.3,carb:5.8,f:.1},{name:'Green Beans',c:31,p:1.8,carb:7,f:.1},{name:'Mushrooms',c:22,p:3.1,carb:3.3,f:.3},{name:'Lettuce',c:15,p:1.4,carb:2.9,f:.2},{name:'Bottle Gourd',c:15,p:.6,carb:3.4,f:.1},{name:'Okra',c:33,p:1.9,carb:7.5,f:.2},{name:'Chicken Thigh (skinless)',c:209,p:26,carb:0,f:11},{name:'Turkey Breast',c:135,p:29,carb:0,f:1.6},{name:'Tuna',c:132,p:28.2,carb:0,f:1.3},{name:'Salmon',c:208,p:20.4,carb:0,f:13.4},{name:'Prawns',c:99,p:24,carb:.2,f:.3},{name:'Egg White',c:52,p:10.9,carb:.7,f:.2},{name:'Low-fat Milk',c:42,p:3.4,carb:5,f:1},{name:'Buttermilk',c:40,p:3.3,carb:4.8,f:.9},{name:'Cottage Cheese (low fat)',c:98,p:11.1,carb:3.4,f:4.3},{name:'Sattu',c:406,p:22.5,carb:58,f:7.5},{name:'Thepla',c:250,p:7,carb:35,f:9},{name:'Khichdi',c:120,p:4.5,carb:20,f:3},{name:'Vegetable Soup',c:45,p:2,carb:8,f:.8},{name:'Hummus',c:166,p:7.9,carb:14.3,f:9.6},{name:'Dark Chocolate 70%',c:598,p:7.8,carb:46,f:42.6},
{name:'Vegetable Sabzi (cooked)',c:90,p:2.5,carb:12,f:3.5},{name:'Sambar',c:65,p:3.5,carb:10,f:1.5},{name:'Raita',c:60,p:3,carb:5,f:3},{name:'Vegetable Pulao',c:150,p:3.5,carb:26,f:3.5},{name:'Aloo Paratha',c:260,p:6,carb:38,f:9},{name:'Methi Thepla',c:250,p:7,carb:35,f:9},{name:'Besan Chilla',c:180,p:9,carb:22,f:6},{name:'Moong Dal Chilla',c:170,p:10,carb:23,f:4},{name:'Vegetable Khichdi',c:120,p:4.5,carb:20,f:3},{name:'Paneer Bhurji',c:190,p:13,carb:7,f:12},{name:'Palak Paneer',c:150,p:8,carb:8,f:9},{name:'Chicken Curry',c:160,p:16,carb:5,f:8},{name:'Vegetable Dalia',c:95,p:3.5,carb:17,f:1.5},{name:'Dhokla',c:160,p:8,carb:22,f:4},{name:'Sprouts Chaat',c:90,p:6,carb:14,f:1.5},{name:'Peanut Chutney',c:300,p:13,carb:15,f:22},{name:'Sattu Drink (unsweetened)',c:75,p:4.5,carb:10,f:1.5},{name:'Vegetable Sandwich',c:190,p:6,carb:29,f:5},{name:'Chicken Tikka',c:165,p:25,carb:4,f:5}
);
let meal=[];let profile=null;
const $=id=>document.getElementById(id); const num=id=>parseFloat($(id)?.value)||0;

// Human360 V9 local authentication (front-end demo; no real server/database).
const AUTH_USERS_KEY='human360Users';
const AUTH_SESSION_KEY='human360Session';
function getUsers(){try{return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)||'{}')}catch(e){return {}}}
function setUsers(u){localStorage.setItem(AUTH_USERS_KEY,JSON.stringify(u))}
function emailKey(email){return String(email||'').trim().toLowerCase().replace(/[^a-z0-9]/g,'_')}
function usernameKey(v){return String(v||'').trim().toLowerCase().replace(/[^a-z0-9_]/g,'_')}
function phoneKey(v){return String(v||'').replace(/\D/g,'')}
function userStorageKey(user){return user?.uid||user?.username||user?.email||'guest'}
function profileStorageKey(user){return 'human360Profile_'+emailKey(userStorageKey(user))}
function normalizeUser(u,key){if(!u)return null;return {...u,uid:u.uid||key}}
function findUser(identifier){const raw=String(identifier||'').trim();if(!raw)return null;const phone=phoneKey(raw),uname=usernameKey(raw),email=raw.toLowerCase();const users=getUsers();for(const [key,val] of Object.entries(users)){const u=normalizeUser(val,key);if((u.username&&usernameKey(u.username)===uname)||(u.phone&&phoneKey(u.phone)===phone)||(u.email&&u.email.toLowerCase()===email)||(key===raw.toLowerCase()))return {key,user:u};}return null}
function switchAuth(mode){const login=mode==='login';$('loginForm').style.display=login?'block':'none';$('registerForm').style.display=login?'none':'block';$('loginTab').classList.toggle('active',login);$('registerTab').classList.toggle('active',!login)}
function fillDemoLogin(){$('loginIdentifier').value='demo';$('loginPassword').value='human360';$('loginError').textContent='Demo username filled. Click Sign in.'}
function registerUser(){const name=$('regName').value.trim(),username=usernameKey($('regUsername').value),phone=phoneKey($('regPhone').value),email=$('regEmail').value.trim().toLowerCase(),pass=$('regPassword').value,ok=$('regTerms').checked,err=$('registerError');err.textContent='';if(name.length<2)return err.textContent='Please enter your name.';if(username.length<3)return err.textContent='Username must be at least 3 characters.';if(!/^[a-z0-9_]+$/.test(username))return err.textContent='Use letters, numbers or underscore in username.';if(!/^\d{10}$/.test(phone))return err.textContent='Enter a valid 10-digit phone number.';if(email && !/^\S+@\S+\.\S+$/.test(email))return err.textContent='Enter a valid email or leave it blank.';if(pass.length<6)return err.textContent='Password must be at least 6 characters.';if(!ok)return err.textContent='Please accept the demo terms.';const users=getUsers();for(const u of Object.values(users)){if(u.username&&usernameKey(u.username)===username)return err.textContent='That username is already taken.';if(u.phone&&phoneKey(u.phone)===phone)return err.textContent='That phone number is already registered.';if(email&&u.email&&u.email.toLowerCase()===email)return err.textContent='That email is already registered.';}const uid='u_'+username+'_'+phone.slice(-4);const user={uid,name,username,phone,email:email||'',password:pass,createdAt:new Date().toISOString()};users[uid]=user;setUsers(users);localStorage.setItem(AUTH_SESSION_KEY,JSON.stringify({uid,remember:true}));localStorage.setItem(profileStorageKey(user),JSON.stringify({name}));enterApp(user);}
function loginUser(){const identifier=$('loginIdentifier').value.trim(),pass=$('loginPassword').value,err=$('loginError');err.textContent='';const found=findUser(identifier);if(!found||found.user.password!==pass)return err.textContent='Username/phone or password is incorrect.';localStorage.setItem(AUTH_SESSION_KEY,JSON.stringify({uid:found.user.uid||found.key,remember:$('rememberMe').checked}));enterApp(found.user);}
function enterApp(user){$('authScreen').classList.add('hidden');$('appShell').style.display='grid';$('topName').textContent=user.name||'User';document.querySelector('.profile-chip span').textContent=(user.name||'U').slice(0,2).toUpperCase();const saved=JSON.parse(localStorage.getItem(profileStorageKey(user))||'null') || (user.email?JSON.parse(localStorage.getItem('human360Profile_'+emailKey(user.email))||'null'):null);if(saved&&saved.age){profile=saved;localStorage.setItem('human360V2',JSON.stringify(saved));populateProfile(saved);updateUI()}else if(user.name&&$('name'))$('name').value=user.name;showWelcomeToast(user.name);}
function logoutUser(){if(profile){const session=JSON.parse(localStorage.getItem(AUTH_SESSION_KEY)||'null');const users=getUsers();const found=Object.values(users).find(u=>(u.uid||u.email)===session?.uid);if(found)localStorage.setItem(profileStorageKey(found),JSON.stringify(profile));}localStorage.removeItem(AUTH_SESSION_KEY);profile=null;$('appShell').style.display='none';$('authScreen').classList.remove('hidden');switchAuth('login');$('loginError').textContent='You have been signed out.'}
function authInit(){const users=getUsers();if(!users['demo@human360.app']){users['demo@human360.app']={uid:'demo',name:'Demo User',username:'demo',phone:'9999999999',email:'demo@human360.app',password:'human360',createdAt:new Date().toISOString()};setUsers(users)}const session=JSON.parse(localStorage.getItem(AUTH_SESSION_KEY)||'null');$('appShell').style.display='none';let current=null;if(session?.uid){for(const [key,val] of Object.entries(users)){if((val.uid||key)===session.uid){current=normalizeUser(val,key);break}}}if(current&&session.remember){enterApp(current)}else{$('authScreen').classList.remove('hidden');}}
function showWelcomeToast(name){let t=document.getElementById('welcomeToast');if(!t){t=document.createElement('div');t.id='welcomeToast';t.className='welcome-toast';document.body.appendChild(t)}t.textContent=`Welcome back, ${name||'User'} 👋`;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
function showSmartInsight(){if(!profile){alert('Complete your profile first for smart insights.');return}const p=profile;let msg=p.goal==='loss'?`Your next focus: ${Math.max(20,p.exerciseMinutes)} min of movement, mostly Zone 2 cardio plus 2 strength sessions this week.`:p.goal==='gain'?`Your next focus: progressive strength work and a protein-rich meal after training. Keep your calorie target around ${Math.round(p.goalCal)} kcal.`:`Your next focus: maintain consistency with strength, cardio and mobility. Your personalized HR range is ${p.hr1}–${p.hr2} bpm.`;alert(`Human360 Smart Coach\n\n${msg}\n\nWater target: ${p.water.toFixed(1)} L/day.`)}
function renderStreak(){const arr=getProgress();if(!$('streakCount'))return;if(!arr.length){$('streakCount').textContent='0 days';return}let streak=1;for(let i=arr.length-1;i>0;i--){const a=new Date(arr[i].date),b=new Date(arr[i-1].date);const diff=Math.round((a-b)/86400000);if(diff===1)streak++;else break}$('streakCount').textContent=streak+' day'+(streak===1?'':'s')}

function go(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));$(id).classList.add('active-view');document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.target===id));const titles={dashboard:'Good morning 👋',profile:'Your Health Profile',calculators:'Health Calculators',nutrition:'Nutrition & Food',fitness:'Exercise & Yoga',progress:'Progress Tracking',goals:'Goal Planner',report:'Health Report',myplan:'My Smart Plan'};$('pageTitle').textContent=titles[id]||'Human360';window.scrollTo({top:0,behavior:'smooth'});if(id==='report')renderReport();if(id==='progress')renderProgress();}
document.querySelectorAll('.nav').forEach(n=>n.onclick=()=>go(n.dataset.target));

function calculate(){
 const name=$('name').value.trim()||'Guest',age=num('age'),h=num('height'),w=num('weight'),act=num('activity'),gender=$('gender').value,goal=$('goal').value,exerciseMinutes=num('exerciseMinutes'),fitnessLevel=$('fitnessLevel').value;
 if(!age||!h||!w){alert('Please enter age, height and weight.');return;}
 if(age<1||age>120){alert('Please enter an age between 1 and 120 years.');return;}
 if(h<50||h>250){alert('Please enter a height between 50 and 250 cm.');return;}
 if(w<20||w>300){alert('Please enter a weight between 20 and 300 kg.');return;}
 if(exerciseMinutes<0||exerciseMinutes>600){alert('Daily exercise must be between 0 and 600 minutes.');return;}
 const bmi=w/((h/100)**2),bmr=gender==='male'?10*w+6.25*h-5*age+5:10*w+6.25*h-5*age-161,cal=bmr*act,ideal=22*(h/100)**2;
 const water=Math.min(5.5,Math.max(1.5,w*.035+(exerciseMinutes/30)*.35+(act>=1.725?.25:act>=1.55?.15:0)));
 const maxHR=208-.7*age;
 const fitnessAdj={beginner:.50,intermediate:.60,advanced:.70}[fitnessLevel];
 const low=Math.round(maxHR*(fitnessAdj-.05)),high=Math.round(maxHR*(fitnessAdj+.05));
 const zones={maxHR:Math.round(maxHR),z1:[Math.round(maxHR*.50),Math.round(maxHR*.60)],z2:[Math.round(maxHR*.60),Math.round(maxHR*.70)],z3:[Math.round(maxHR*.70),Math.round(maxHR*.80)],z4:[Math.round(maxHR*.80),Math.round(maxHR*.90)],z5:[Math.round(maxHR*.90),Math.round(maxHR)]};
 const bmiPts=bmi>=18.5&&bmi<25?20:bmi>=17&&bmi<27?12:6,actPts=act>=1.55?15:act>=1.375?11:7,waterPts=Math.min(10,Math.round(water/3*10)),score=Math.min(100,bmiPts+actPts+waterPts+35),goalCal=goal==='loss'?cal-350:goal==='gain'?cal+300:cal;
 profile={name,age,h,w,act,gender,goal,bmi,bmr,cal,water,ideal,maxHR,fitnessLevel,exerciseMinutes,hr1:low,hr2:high,zones,score,goalCal};
 localStorage.setItem('human360V2',JSON.stringify(profile));const session=JSON.parse(localStorage.getItem(AUTH_SESSION_KEY)||'null');if(session?.email)localStorage.setItem('human360Profile_'+emailKey(session.email),JSON.stringify(profile));
 if(!$('targetWeight').value) $('targetWeight').value=goal==='loss'?Math.max(40,w-5):goal==='gain'?w+5:w;
 if(!$('targetWater').value) $('targetWater').value=water.toFixed(1);
 updateUI();saveDailySnapshot(true);go('dashboard');
}
function updateUI(){if(!profile)return;const p=profile;
 $('topName').textContent=p.name;document.querySelector('.profile-chip span').textContent=p.name.slice(0,2).toUpperCase();
 $('dashBMI').textContent=p.bmi.toFixed(1);$('dashBMIStatus').textContent=p.bmi<18.5?'Below reference':p.bmi<25?'Reference range':p.bmi<30?'Above reference':'High reference';$('dashCal').textContent=Math.round(p.cal);$('dashWater').textContent=p.water.toFixed(1)+' L';$('dashHR').textContent=`${p.hr1}–${p.hr2}`;$('dashHRNote').textContent=`Estimated max ~${Math.round(p.maxHR)} bpm`;
 $('scoreHero').textContent=p.score;$('scoreStatus').textContent=p.score>=80?'Strong foundation':p.score>=60?'Good start':'Needs attention';$('scoreBar').style.width=p.score+'%';$('scoreBadge').textContent=p.score>=80?'Strong foundation':p.score>=60?'Good start':'Needs attention';$('scoreAdvice').textContent=p.score>=80?'Keep consistent and monitor your progress.':'Focus on regular movement, balanced meals and hydration.';
 $('sBMI').textContent=bmiLabel(p.bmi);$('sAct').textContent=p.act>=1.55?'Good':'Build up';$('sWater').textContent=p.water.toFixed(1)+'L';$('sGoal').textContent=p.goal==='loss'?'Fat loss':p.goal==='gain'?'Weight gain':'Maintain';
 $('cBMI').textContent=p.bmi.toFixed(1);$('cBMR').textContent=Math.round(p.bmr);$('cCalories').textContent=Math.round(p.cal);$('cWater').textContent=p.water.toFixed(1)+' L';$('cIdeal').textContent=p.ideal.toFixed(1)+' kg';$('cHR').textContent=`${p.hr1}–${p.hr2}`;
 $('focus').innerHTML=(p.goal==='loss'?['🥗 Higher-protein meals + vegetables','🏃 Mix cardio and strength',`💧 Aim for ${p.water.toFixed(1)} L/day`,`❤️ Train mostly around ${p.hr1}–${p.hr2} bpm`]:p.goal==='gain'?['🍚 Add calorie-dense whole foods','💪 Prioritize strength training',`💧 Aim for ${p.water.toFixed(1)} L/day`,`❤️ Build intensity gradually`]:['🥗 Keep meals balanced','🏃 Maintain regular movement',`💧 Aim for ${p.water.toFixed(1)} L/day`,`🧘 Add mobility and yoga`]).map(x=>`<div>${x}</div>`).join('');
 $('hrProfileText').textContent=`Age ${p.age} • Estimated max ${Math.round(p.maxHR)} bpm`;$('hrZones').innerHTML=zoneHTML(p.zones);
 renderMealGuide();renderGoals();renderProgress();renderReport();renderDashboardChart();renderFitnessRecommendations();renderStreak();renderSmartCoach();renderAdvanced();renderAdvancedNutrition();generateAdvancedWorkout();
}
function renderSmartCoach(){if(!$('smartCoachTitle')||!$('smartCoachText')||!profile)return;const p=profile;let title='Keep building your routine';let text=`Your ${p.goal==='loss'?'fat-loss':'health'} plan is ready. Today, aim for ${Math.max(20,p.exerciseMinutes)} minutes of movement and ${p.water.toFixed(1)} L of water.`;if(p.goal==='gain'){title='Strength + recovery focus';text=`Prioritize resistance training at your ${p.fitnessLevel} level and reach about ${Math.round(p.goalCal)} kcal today with protein spread across meals.`}else if(p.goal==='loss'){title='Smart fat-loss focus';text=`Combine moderate cardio with strength work. Keep most cardio around ${p.hr1}–${p.hr2} bpm and build consistency before adding intensity.`}else{title='Balanced maintenance focus';text=`Keep a mix of strength, cardio and yoga. Your suggested training range is ${p.hr1}–${p.hr2} bpm.`}$('smartCoachTitle').textContent=title;$('smartCoachText').textContent=text}
function bmiLabel(v){return v<18.5?'Below':v<25?'Good':v<30?'Above':'High'}
function zoneHTML(z){return [['Zone 1',z.z1,'Easy'],['Zone 2',z.z2,'Moderate'],['Zone 3',z.z3,'Aerobic'],['Zone 4',z.z4,'Hard'],['Zone 5',z.z5,'Very hard']].map(x=>`<div class="hr-zone"><span>${x[0]}<small>${x[2]}</small></span><b>${x[1][0]}–${x[1][1]} bpm</b></div>`).join('')}

function foodMatchesPreference(f,pref){if(pref==='protein')return f.p>=10;if(pref==='carb')return f.carb>=20;return true}
function mealPreferenceScore(m,pref){if(pref==='protein')return (m.protein||0)*3; if(pref==='carb')return (m.items||[]).reduce((sum,it)=>{const f=foods.find(x=>x.name.toLowerCase()===String(it[0]).toLowerCase());return sum+(f?f.carb*(Number(it[1])/100):0)},0); return 0;}
function renderFoods(){const q=($('foodSearch')?.value||'').toLowerCase(),mode=$('foodMode')?.value||'all',pref=$('nutritionPreference')?.value||'balanced';if($('foodCount'))$('foodCount').textContent=foods.length+' foods';const matches=foods.filter(f=>{if(!f.name.toLowerCase().includes(q)||!foodMatchesPreference(f,pref))return false;if(mode==='protein'&&f.p<12)return false;if(mode==='carb'&&f.carb<20)return false;if(mode==='lowcal'&&f.c>100)return false;return true});$('foods').innerHTML=matches.map(f=>{const i=foods.indexOf(f);return `<div class="food-row"><div><h4>${f.name}</h4><small>${f.c} kcal • P ${f.p}g • C ${f.carb}g • F ${f.f}g / 100g</small></div><div class="food-actions"><input class="portion-input" id="portion-${i}" type="number" min="10" step="10" value="100" aria-label="grams"><span>g</span><button class="add" onclick="addFood(${i})">+ Add</button></div></div>`}).join('');if(!matches.length)$('foods').innerHTML='<p class="muted">No food found for these filters.</p>'}
function addFood(i){const grams=Math.max(10,Number($('portion-'+i)?.value||100));meal.push({...foods[i],grams});renderMeal()}
function removeFood(i){meal.splice(i,1);renderMeal()}
function renderMeal(){if(!meal.length)$('mealList').innerHTML='<p class="muted">Add foods to build your meal.</p>';else $('mealList').innerHTML=meal.map((f,i)=>`<div class="meal-row"><div><h4>${f.name}</h4><small>${Math.round(f.c*f.grams/100)} kcal • ${f.grams}g • P ${((f.p*f.grams)/100).toFixed(1)}g</small></div><div class="meal-actions"><input type="number" min="10" step="10" value="${f.grams}" onchange="updateMealPortion(${i},this.value)"><button class="add" onclick="removeFood(${i})">Remove</button></div></div>`).join('');let c=meal.reduce((a,f)=>a+f.c*f.grams/100,0),p=meal.reduce((a,f)=>a+f.p*f.grams/100,0),carb=meal.reduce((a,f)=>a+f.carb*f.grams/100,0),fat=meal.reduce((a,f)=>a+f.f*f.grams/100,0);$('mealCalories').textContent=Math.round(c)+' kcal';$('mP').textContent=p.toFixed(1)+'g';$('mC').textContent=carb.toFixed(1)+'g';$('mF').textContent=fat.toFixed(1)+'g';$('mealCount').textContent=meal.length+' items';renderAdvancedNutrition()}
function updateMealPortion(i,v){meal[i].grams=Math.max(10,Number(v)||100);renderMeal()}

function renderMealGuide(){if(!profile){return}$('mealGoalBadge').textContent=profile.goal==='loss'?'Fat loss plan':profile.goal==='gain'?'Weight gain plan':'Maintenance plan';const cal=Math.round(profile.goalCal),protein=Math.round(profile.w*(profile.goal==='loss'?1.6:profile.goal==='gain'?1.5:1.3)),fat=Math.round(cal*.27/9),carb=Math.max(80,Math.round((cal-protein*4-fat*9)/4));$('mealCalTarget').textContent=cal+' kcal';$('mealProteinTarget').textContent=protein+' g';$('mealCarbTarget').textContent=carb+' g';$('mealFatTarget').textContent=fat+' g';const p=[.25,.35,.30,.10],names=['Breakfast','Lunch','Snack','Dinner'];$('mealSchedule').innerHTML=names.map((n,i)=>`<div><span>${n}</span><b>${Math.round(cal*p[i])} kcal</b><small>${i===0?'Protein + fruit + whole grain':i===1?'Protein + grain + vegetables':i===2?'Fruit + yogurt/nuts':'Protein + vegetables + moderate carbs'}</small></div>`).join('')}

const exercises=[
 {type:'cardio',tag:'CARDIO',name:'Jog / Easy Run',icon:'🏃',steps:'Keep a relaxed posture, land softly and use a pace you can control.',detail:'10–25 min • Build gradually',visual:'run',image:'assets/fitness/running.jpg',level:'intermediate',goals:['loss','maintain']},
 {type:'cardio',tag:'CARDIO',name:'Cycling',icon:'🚴',steps:'Keep a smooth pedal rhythm and knees tracking forward.',detail:'20–45 min • Moderate effort',visual:'cycle',image:'assets/fitness/cycling.jpg',level:'beginner',goals:['loss','maintain']},
 {type:'cardio',tag:'CARDIO',name:'Jumping Jacks',icon:'🤸',steps:'Stand tall → jump feet apart while raising arms → return softly.',detail:'3 × 30–60 sec • Cardio',visual:'jacks',image:'assets/fitness/jumping-jacks.jpg',level:'beginner',goals:['loss','maintain']},
 {type:'strength',tag:'STRENGTH',name:'Bodyweight Squats',icon:'🏋️',steps:'Feet about shoulder width → hips back → knees track over toes → stand tall.',detail:'2–3 × 8–15 reps',visual:'squat',image:'assets/fitness/squats.jpg',level:'beginner',goals:['loss','gain','maintain']},
 {type:'strength',tag:'STRENGTH',name:'Push-ups',icon:'💪',steps:'Hands under shoulders → keep body straight → lower with control → push up.',detail:'2–3 × 5–12 reps',visual:'push',image:'assets/fitness/pushups.jpg',level:'beginner',goals:['gain','maintain','loss']},
 {type:'strength',tag:'STRENGTH',name:'Lunges',icon:'🦵',steps:'Step forward → lower both knees with control → push through the front foot.',detail:'3 × 8–12 each side',visual:'lunge',image:'assets/fitness/lunges.jpg',level:'beginner',goals:['gain','loss','maintain']},
 {type:'strength',tag:'STRENGTH',name:'Bicep Curls',icon:'💪',steps:'Keep elbows near your sides → curl the weights → lower slowly.',detail:'3 × 10–12 reps',visual:'curl',image:'assets/fitness/bicep-curls.jpg',level:'intermediate',goals:['gain']},
 {type:'strength',tag:'STRENGTH',name:'Shoulder Press',icon:'🏋️',steps:'Brace your core → press weights overhead without locking aggressively.',detail:'3 × 8–12 reps',visual:'press',image:'assets/fitness/shoulder-press.jpg',level:'intermediate',goals:['gain','maintain']},
 {type:'strength',tag:'STRENGTH',name:'Glute Bridge',icon:'🍑',steps:'Lie on your back → knees bent → squeeze glutes → lift hips → lower slowly.',detail:'2–3 × 10–15 reps',visual:'bridge',image:'assets/fitness/glute-bridge.jpg',level:'beginner',goals:['gain','loss','maintain']},
 {type:'strength',tag:'STRENGTH',name:'Deadlift',icon:'🏋️',steps:'Stand with feet hip-width apart → hinge at the hips → keep your back neutral → drive through the floor and stand tall.',detail:'3 × 8–10 reps • Intermediate',visual:'deadlift',image:'assets/fitness/deadlift.jpg',level:'intermediate',goals:['gain','maintain','loss']},
 {type:'strength',tag:'STRENGTH',name:'Pull-ups',icon:'💪',steps:'Grip the bar firmly → brace your core → pull your chest toward the bar → lower under control.',detail:'3 × 5–8 reps • Advanced',visual:'pullups',image:'assets/fitness/pullups.jpg',level:'advanced',goals:['gain','maintain']},
 {type:'core',tag:'CORE',name:'Plank',icon:'🧱',steps:'Elbows under shoulders → keep a straight line → brace your core and breathe.',detail:'3 × 20–45 sec',visual:'plank',image:'assets/fitness/plank.jpg',level:'beginner',goals:['loss','gain','maintain']},
 {type:'cardio',tag:'CARDIO',name:'Mountain Climbers',icon:'🏃',steps:'Start in a high plank → alternate driving knees toward your chest while keeping your core stable.',detail:'3 × 20–30 sec',visual:'mountain',image:'assets/fitness/mountain-climbers.jpg',level:'intermediate',goals:['loss']},
 {type:'cardio',tag:'CARDIO',name:'Burpees',icon:'🔥',steps:'Squat → hands down → step/jump back → return → stand and jump only if comfortable.',detail:'3 × 6–10 reps',visual:'burpee',image:'assets/fitness/burpees.jpg',level:'advanced',goals:['loss']},
 {type:'yoga',tag:'YOGA',name:'Tadasana',icon:'🧘',steps:'Stand tall with feet grounded, lengthen through the crown of your head and breathe slowly.',detail:'30–60 sec • Posture',visual:'tadasana',image:'assets/fitness/tadasana.jpg',level:'beginner',goals:['loss','gain','maintain']},
 {type:'yoga',tag:'YOGA',name:'Vrikshasana',icon:'🧘',steps:'Stand tall → place one foot against the inner lower leg → bring hands together → balance.',detail:'20–40 sec each side • Balance',visual:'tree',image:'assets/fitness/vrikshasana.jpg',level:'beginner',goals:['maintain','gain','loss']},
 {type:'yoga',tag:'YOGA',name:'Bhujangasana',icon:'🧘',steps:'Lie on your stomach → hands near chest → gently lift the upper body without forcing the lower back.',detail:'15–30 sec × 2–3 • Mobility',visual:'cobra',image:'assets/fitness/bhujangasana.jpg',level:'beginner',goals:['loss','maintain']},
 {type:'yoga',tag:'YOGA',name:'Trikonasana',icon:'🧘',steps:'Take a wide stance → extend arms → hinge sideways with a long spine → breathe.',detail:'20–30 sec each side • Flexibility',visual:'triangle',image:'assets/fitness/trikonasana.jpg',level:'beginner',goals:['loss','maintain']},
 {type:'yoga',tag:'YOGA',name:'Setu Bandhasana',icon:'🌉',steps:'Lie on your back → knees bent → press feet down → lift hips gently → lower slowly.',detail:'20–30 sec × 2–3 • Mobility',visual:'bridge',image:'assets/fitness/setu-bandhasana.jpg',level:'beginner',goals:['gain','maintain','loss']},
 {type:'yoga',tag:'YOGA',name:'Balasana',icon:'🧘',steps:'Kneel → sit hips toward heels → fold forward comfortably → breathe slowly.',detail:'30–90 sec • Recovery',visual:'child',image:'assets/fitness/balasana.jpg',level:'beginner',goals:['loss','gain','maintain']}
];
// V11 advanced movement metadata: used for smarter matching and weekly planning.
const exerciseMeta={
 'Jog / Easy Run':{muscles:'legs • glutes • cardio',equipment:'none',impact:'medium',mins:20},'Cycling':{muscles:'legs • glutes • cardio',equipment:'cycle',impact:'low',mins:30},'Jumping Jacks':{muscles:'full body • cardio',equipment:'none',impact:'high',mins:10},'Bodyweight Squats':{muscles:'quads • glutes • core',equipment:'none',impact:'medium',mins:15},'Push-ups':{muscles:'chest • shoulders • triceps',equipment:'none',impact:'medium',mins:15},'Lunges':{muscles:'quads • glutes • hamstrings',equipment:'none',impact:'medium',mins:15},'Bicep Curls':{muscles:'biceps • forearms',equipment:'dumbbells',impact:'low',mins:15},'Shoulder Press':{muscles:'shoulders • triceps • core',equipment:'dumbbells',impact:'medium',mins:15},'Glute Bridge':{muscles:'glutes • hamstrings • core',equipment:'none',impact:'low',mins:12},'Deadlift':{muscles:'posterior chain • glutes • back',equipment:'barbell',impact:'medium',mins:20},'Pull-ups':{muscles:'lats • biceps • core',equipment:'pull-up bar',impact:'high',mins:15},'Plank':{muscles:'core • shoulders',equipment:'none',impact:'low',mins:8},'Mountain Climbers':{muscles:'core • shoulders • cardio',equipment:'none',impact:'high',mins:10},'Burpees':{muscles:'full body • cardio',equipment:'none',impact:'high',mins:12},'Tadasana':{muscles:'posture • balance',equipment:'mat',impact:'low',mins:5},'Vrikshasana':{muscles:'balance • legs • core',equipment:'mat',impact:'low',mins:5},'Bhujangasana':{muscles:'back • chest • mobility',equipment:'mat',impact:'low',mins:6},'Trikonasana':{muscles:'hamstrings • hips • side body',equipment:'mat',impact:'low',mins:6},'Setu Bandhasana':{muscles:'glutes • core • back',equipment:'mat',impact:'low',mins:6},'Balasana':{muscles:'back • hips • recovery',equipment:'mat',impact:'low',mins:5}
};
function getMeta(e){return exerciseMeta[e.name]||{muscles:'full body',equipment:'none',impact:'medium',mins:15}}
function advancedExerciseScore(e){
 if(!profile)return 0; const p=profile,m=getMeta(e),goal=p.goal||'maintain',level=p.fitnessLevel||'beginner'; let score=0;
 if(e.goals.includes(goal))score+=40;if(e.level===level)score+=24;
 if(goal==='loss'&&['cardio','core'].includes(e.type))score+=22;
 if(goal==='gain'&&e.type==='strength')score+=25;
 if(goal==='maintain'&&['strength','cardio','yoga'].includes(e.type))score+=12;
 if((p.exerciseMinutes||30)<=20&&m.mins<=15)score+=14;
 if((p.exerciseMinutes||30)>=40&&m.mins>=15)score+=8;
 if((p.bmi||22)>=30&&m.impact==='low')score+=18;if((p.bmi||22)>=30&&m.impact==='high')score-=25;
 if((p.age||30)>=50&&m.impact!=='low')score-=10;if((p.age||30)>=55&&e.level==='advanced')score-=20;
 if(goal==='loss'&&m.impact==='low')score+=5;
 return score;
}
function getAdvancedRecommendations(){return profile?exercises.map(e=>({...e,meta:getMeta(e),score:advancedExerciseScore(e)})).sort((a,b)=>b.score-a.score):[]}
function generateAdvancedWorkout(){
 const box=$('advancedWorkoutPlan'),sum=$('workoutSummary'); if(!box||!sum)return;
 if(!profile){box.innerHTML='<div class="empty-state">Complete your profile first to generate your adaptive weekly workout.</div>';sum.innerHTML='';return}
 const p=profile,mins=Math.max(15,Number(p.exerciseMinutes)||30),rec=getAdvancedRecommendations();
 const strength=rec.filter(e=>e.type==='strength'&&e.score>0),cardio=rec.filter(e=>e.type==='cardio'&&e.score>0),yoga=rec.filter(e=>e.type==='yoga'&&e.score>0),core=rec.filter(e=>e.type==='core'&&e.score>0);
 const pool=[
  {day:'Mon',label:'Strength foundation',items:[strength[0]||rec[0],core[0]||strength[1]||rec[1]]},
  {day:'Tue',label:'Cardio + mobility',items:[cardio[0]||rec[2],yoga[0]||rec[3]]},
  {day:'Wed',label:'Recovery / yoga',items:[yoga[1]||yoga[0]||rec[3]]},
  {day:'Thu',label:'Strength + core',items:[strength[1]||strength[0]||rec[1],core[0]||strength[2]||rec[2]]},
  {day:'Fri',label:'Cardio focus',items:[cardio[1]||cardio[0]||rec[2],yoga[2]||yoga[0]||rec[3]]},
  {day:'Sat',label:'Full-body choice',items:[rec[0],rec[1]]},
  {day:'Sun',label:'Rest & reset',items:[yoga[0]||rec[0]]}
 ];
 const unique=[];pool.forEach(d=>{d.items=d.items.filter(Boolean).filter((e,i,a)=>a.findIndex(x=>x.name===e.name)===i);});
 box.innerHTML=pool.map((d,i)=>{const rest=d.day==='Sun';return `<div class="workout-day ${rest?'recovery-day':''}"><div class="day-top"><span>${d.day}</span><b>${d.label}</b><small>${rest?'Recovery':'~'+Math.min(60,Math.max(15,mins+(i%2?5:0)))+' min'}</small></div><div class="workout-items">${d.items.map(e=>`<button onclick="showExerciseByName('${e.name}')"><img src="${e.image}" alt="Human demonstration of ${e.name}"><span><b>${e.name}</b><small>${getMeta(e).muscles}</small></span></button>`).join('')}</div></div>`}).join('');
 const sessions=pool.filter(x=>x.day!=='Sun').length, strengthDays=pool.filter(x=>x.items.some(e=>e.type==='strength')).length;
 sum.innerHTML=`<div><span>Weekly sessions</span><b>${sessions}</b></div><div><span>Strength days</span><b>${strengthDays}</b></div><div><span>Daily target</span><b>${mins} min</b></div><div><span>Primary focus</span><b>${p.goal==='loss'?'Fat loss + fitness':p.goal==='gain'?'Strength + recovery':'Balanced fitness'}</b></div>`;
}
function renderAdvancedNutrition(){
 const out=$('nutritionProgress');if(!out)return;if(!profile){out.innerHTML='<div class="empty-state">Complete your profile to see your nutrition targets.</div>';return}
 const cal=Math.max(1,profile.goalCal), protein=Math.round(profile.w*(profile.goal==='loss'?1.6:profile.goal==='gain'?1.5:1.3)), fat=Math.round(cal*.27/9), carb=Math.max(80,Math.round((cal-protein*4-fat*9)/4));
 const total=meal.reduce((a,x)=>a+(x.c||0)*(x.grams||100)/100,0), mp=meal.reduce((a,x)=>a+(x.p||0)*(x.grams||100)/100,0),mc=meal.reduce((a,x)=>a+(x.carb||0)*(x.grams||100)/100,0),mf=meal.reduce((a,x)=>a+(x.f||0)*(x.grams||100)/100,0);
 const bar=(label,val,target,unit)=>`<div class="nutrient-meter"><div><span>${label}</span><b>${val.toFixed(0)}${unit} / ${target}${unit}</b></div><div class="bar"><i style="width:${Math.min(100,val/target*100)}%"></i></div></div>`;
 out.innerHTML=`<div class="nutrition-meters"><div class="nutrition-target-summary"><span>Today's target</span><b>${cal} kcal</b><small>${profile.goal==='loss'?'Moderate calorie deficit focus':profile.goal==='gain'?'Calorie surplus + protein focus':'Balanced maintenance focus'}</small></div><div class="nutrition-meter-grid">${bar('Calories',total,cal,' kcal')}${bar('Protein',mp,protein,' g')}${bar('Carbs',mc,carb,' g')}${bar('Fat',mf,fat,' g')}</div></div>`;
}
const indianMealIdeas = [
 {slot:'Breakfast',name:'Poha with peanuts',items:[['Poha',180],['Peanuts',10]],kcal:280,protein:7,diet:'veg',goal:['loss','maintain','gain'],tag:'Budget-friendly'},
 {slot:'Breakfast',name:'Idli + sambar',items:[['Idli',150],['Sambar',180]],kcal:310,protein:10,diet:'veg',goal:['loss','maintain','gain'],tag:'Light & balanced'},
 {slot:'Breakfast',name:'Besan chilla + curd',items:[['Besan Chilla',150],['Curd',100]],kcal:320,protein:13,diet:'veg',goal:['loss','maintain','gain'],tag:'Protein boost'},
 {slot:'Breakfast',name:'Oats with milk + banana',items:[['Oats',40],['Milk',200],['Banana',80]],kcal:330,protein:12,diet:'veg',goal:['loss','maintain','gain'],tag:'Quick breakfast'},
 {slot:'Breakfast',name:'Paneer-stuffed roti',items:[['Roti',60],['Paneer',50]],kcal:340,protein:14,diet:'veg',goal:['maintain','gain'],tag:'Higher protein'},
 {slot:'Breakfast',name:'Egg bhurji + roti',items:[['Egg',100],['Roti',40]],kcal:320,protein:17,diet:'eggetarian',goal:['loss','maintain','gain'],tag:'Protein-rich'},
 {slot:'Breakfast',name:'Vegetable upma + curd',items:[['Upma',200],['Curd',80]],kcal:300,protein:9,diet:'veg',goal:['loss','maintain','gain'],tag:'Everyday Indian'},
 {slot:'Lunch',name:'2 roti + dal + sabzi',items:[['Roti',80],['Dal (cooked)',180],['Vegetable Sabzi (cooked)',120]],kcal:470,protein:19,diet:'veg',goal:['loss','maintain','gain'],tag:'Classic home meal'},
 {slot:'Lunch',name:'Dal + rice + salad',items:[['Dal (cooked)',200],['Rice (cooked)',150],['Cucumber',100],['Tomato',80]],kcal:430,protein:17,diet:'veg',goal:['loss','maintain','gain'],tag:'Balanced plate'},
 {slot:'Lunch',name:'Rajma-chawal + salad',items:[['Rajma (cooked)',180],['Rice (cooked)',150],['Cucumber',100]],kcal:460,protein:17,diet:'veg',goal:['loss','maintain','gain'],tag:'Fibre-rich'},
 {slot:'Lunch',name:'Chole + 2 roti',items:[['Chole / Chickpeas (cooked)',160],['Roti',80]],kcal:470,protein:19,diet:'veg',goal:['maintain','gain'],tag:'Filling meal'},
 {slot:'Lunch',name:'Roti + palak paneer',items:[['Roti',80],['Palak Paneer',180]],kcal:440,protein:19,diet:'veg',goal:['maintain','gain'],tag:'Vegetarian protein'},
 {slot:'Lunch',name:'Vegetable khichdi + raita',items:[['Vegetable Khichdi',300],['Raita',100]],kcal:390,protein:13,diet:'veg',goal:['loss','maintain','gain'],tag:'Comfort food'},
 {slot:'Lunch',name:'Chicken curry + roti',items:[['Chicken Curry',180],['Roti',60],['Cucumber',100]],kcal:460,protein:29,diet:'nonveg',goal:['loss','maintain','gain'],tag:'High protein'},
 {slot:'Lunch',name:'Paneer bhurji + roti',items:[['Paneer Bhurji',150],['Roti',60]],kcal:420,protein:22,diet:'veg',goal:['maintain','gain'],tag:'Protein-rich'},
 {slot:'Snack',name:'Roasted chana + fruit',items:[['Black Chana (cooked)',100],['Apple',120]],kcal:220,protein:9,diet:'veg',goal:['loss','maintain','gain'],tag:'Budget snack'},
 {slot:'Snack',name:'Sprouts chaat',items:[['Sprouts Chaat',180],['Tomato',50]],kcal:190,protein:12,diet:'veg',goal:['loss','maintain','gain'],tag:'Light snack'},
 {slot:'Snack',name:'Sattu drink + banana',items:[['Sattu Drink (unsweetened)',250],['Banana',80]],kcal:220,protein:13,diet:'veg',goal:['maintain','gain'],tag:'Energy boost'},
 {slot:'Snack',name:'Curd + fruit + seeds',items:[['Curd',150],['Papaya',100],['Chia Seeds',5]],kcal:180,protein:7,diet:'veg',goal:['loss','maintain','gain'],tag:'Fresh & simple'},
 {slot:'Snack',name:'Boiled eggs + cucumber',items:[['Egg',100],['Cucumber',100]],kcal:180,protein:14,diet:'eggetarian',goal:['loss','maintain','gain'],tag:'Protein snack'},
 {slot:'Dinner',name:'Roti + dal + sabzi',items:[['Roti',60],['Dal (cooked)',160],['Vegetable Sabzi (cooked)',150]],kcal:410,protein:17,diet:'veg',goal:['loss','maintain','gain'],tag:'Home-style dinner'},
 {slot:'Dinner',name:'Moong dal khichdi + curd',items:[['Vegetable Khichdi',280],['Curd',100]],kcal:370,protein:13,diet:'veg',goal:['loss','maintain','gain'],tag:'Easy to digest'},
 {slot:'Dinner',name:'Tofu/paneer-style stir-fry + roti',items:[['Tofu',150],['Vegetable Sabzi (cooked)',150],['Roti',50]],kcal:390,protein:19,diet:'veg',goal:['loss','maintain','gain'],tag:'Plant protein'},
 {slot:'Dinner',name:'Chicken tikka + roti + salad',items:[['Chicken Tikka',150],['Roti',50],['Cucumber',100]],kcal:390,protein:34,diet:'nonveg',goal:['loss','maintain','gain'],tag:'Lean protein'},
 {slot:'Dinner',name:'Dosa + sambar',items:[['Dosa',120],['Sambar',200]],kcal:350,protein:11,diet:'veg',goal:['loss','maintain','gain'],tag:'South Indian'},
 {slot:'Dinner',name:'Roti + egg curry-style plate',items:[['Egg',100],['Roti',60],['Vegetable Sabzi (cooked)',100]],kcal:380,protein:18,diet:'eggetarian',goal:['loss','maintain','gain'],tag:'Everyday meal'},
 {slot:'Breakfast',name:'Moong dal chilla + mint curd',items:[['Moong Dal Chilla',160],['Curd',80]],kcal:300,protein:16,diet:'veg',goal:['loss','maintain','gain'],tag:'Fibre + protein',style:'north',budget:'low',minutes:20},
 {slot:'Breakfast',name:'Methi thepla + curd',items:[['Methi Thepla',120],['Curd',100]],kcal:360,protein:12,diet:'veg',goal:['loss','maintain','gain'],tag:'Home-style',style:'west',budget:'low',minutes:20},
 {slot:'Breakfast',name:'Vegetable dosa + sambar',items:[['Dosa',140],['Sambar',180]],kcal:360,protein:12,diet:'veg',goal:['loss','maintain','gain'],tag:'South Indian',style:'south',budget:'low',minutes:25},
 {slot:'Breakfast',name:'Dalia with milk and nuts',items:[['Barley (cooked)',200],['Milk',150],['Almonds',8]],kcal:290,protein:11,diet:'veg',goal:['loss','maintain','gain'],tag:'Comfort breakfast',style:'central',budget:'low',minutes:20},
 {slot:'Lunch',name:'Roti + arhar dal + bhindi',items:[['Roti',80],['Dal (cooked)',180],['Okra',150]],kcal:440,protein:20,diet:'veg',goal:['loss','maintain','gain'],tag:'Everyday thali',style:'north',budget:'low',minutes:30},
 {slot:'Lunch',name:'Bajra roti + dal + curd',items:[['Bajra (pearl millet)',55],['Dal (cooked)',180],['Curd',100]],kcal:450,protein:20,diet:'veg',goal:['loss','maintain','gain'],tag:'Millet-rich',style:'central',budget:'low',minutes:30},
 {slot:'Lunch',name:'Sambar rice + vegetable salad',items:[['Rice (cooked)',180],['Sambar',220],['Cucumber',100]],kcal:410,protein:13,diet:'veg',goal:['loss','maintain','gain'],tag:'South Indian',style:'south',budget:'low',minutes:25},
 {slot:'Lunch',name:'Kadhi + rice + cucumber',items:[['Curd',160],['Rice (cooked)',150],['Cucumber',100]],kcal:420,protein:13,diet:'veg',goal:['loss','maintain','gain'],tag:'Simple home meal',style:'central',budget:'low',minutes:25},
 {slot:'Lunch',name:'Soya chunk curry + roti',items:[['Soy Chunks (dry)',35],['Roti',80],['Tomato',80]],kcal:420,protein:26,diet:'veg',goal:['loss','maintain','gain'],tag:'High plant protein',style:'north',budget:'low',minutes:30},
 {slot:'Lunch',name:'Egg curry + rice',items:[['Egg',100],['Rice (cooked)',160],['Tomato',80]],kcal:430,protein:18,diet:'eggetarian',goal:['loss','maintain','gain'],tag:'Protein-rich',style:'central',budget:'mid',minutes:25},
 {slot:'Snack',name:'Makhana + chaas',items:[['Muesli',20],['Buttermilk',200]],kcal:150,protein:7,diet:'veg',goal:['loss','maintain','gain'],tag:'Light snack',style:'central',budget:'low',minutes:5},
 {slot:'Snack',name:'Sattu savoury drink',items:[['Sattu',25],['Curd',50]],kcal:140,protein:8,diet:'veg',goal:['loss','maintain','gain'],tag:'Quick budget snack',style:'central',budget:'low',minutes:5},
 {slot:'Snack',name:'Peanut chaat + tomato',items:[['Peanuts',15],['Tomato',100]],kcal:130,protein:5,diet:'veg',goal:['maintain','gain'],tag:'Energy snack',style:'central',budget:'low',minutes:5},
 {slot:'Dinner',name:'Dal tadka + 2 roti + salad',items:[['Dal (cooked)',200],['Roti',80],['Cucumber',100]],kcal:430,protein:23,diet:'veg',goal:['loss','maintain','gain'],tag:'Classic Indian dinner',style:'north',budget:'low',minutes:25},
 {slot:'Dinner',name:'Palak tofu + roti',items:[['Tofu',160],['Spinach',120],['Roti',50]],kcal:340,protein:20,diet:'veg',goal:['loss','maintain','gain'],tag:'Plant protein',style:'north',budget:'mid',minutes:25},
 {slot:'Dinner',name:'Vegetable pulao + raita',items:[['Vegetable Pulao',220],['Raita',120]],kcal:420,protein:12,diet:'veg',goal:['loss','maintain','gain'],tag:'Balanced comfort meal',style:'central',budget:'low',minutes:25},
 {slot:'Dinner',name:'Fish curry + rice + vegetables',items:[['Fish',140],['Rice (cooked)',130],['Vegetable Sabzi (cooked)',100]],kcal:400,protein:31,diet:'nonveg',goal:['loss','maintain','gain'],tag:'Lean protein',style:'south',budget:'mid',minutes:30}
];
function setNutritionStyle(style,button){
 const select=$('nutritionPreference'); if(select)select.value=style;
 document.querySelectorAll('.nutrition-choice').forEach(b=>b.classList.toggle('selected',b.dataset.pref===style));
 const priority=$('mealPriority'),focus=$('nutritionFocus');
 if(style==='protein'){if(priority)priority.value='protein';if(focus)focus.value='protein';}
 else if(style==='balanced'){if(priority)priority.value='balanced';if(focus)focus.value='balanced';}
 else {if(priority)priority.value='balanced';if(focus)focus.value='energy';}
 if(typeof renderFoods==='function')renderFoods();
 generateSmartMeals();
}
function generateSmartMeals(){
 const out=$('smartMealPlan'); if(!out)return;
 const pref=$('nutritionPreference')?.value||'balanced', n=Number($('mealsPerDay')?.value||4), priority=$('mealPriority')?.value||'balanced';
 const goal=profile?.goal||'maintain', target=Math.round(profile?.goalCal||2000);
 const budget=$('foodBudget')?.value||'any', cook=$('cookTime')?.value||'any', style=$('mealStyle')?.value||'any';
 const focus=$('nutritionFocus')?.value||'balanced';
 const avoid=($('avoidFoods')?.value||'').toLowerCase().split(',').map(x=>x.trim()).filter(Boolean);
 const slotOrder=n===3?['Breakfast','Lunch','Dinner']:n===5?['Breakfast','Snack','Lunch','Snack','Dinner']:['Breakfast','Lunch','Snack','Dinner'];
 const used=new Set();
 const plans=slotOrder.map(slot=>{
   let choices=indianMealIdeas.filter(m=>m.slot===slot&&m.goal.includes(goal)&&!used.has(m.name));
   choices=choices.filter(m=>!avoid.some(a=>(m.name+' '+m.items.map(x=>x[0]).join(' ')).toLowerCase().includes(a)));
   if(style!=='any') choices=choices.filter(m=>!m.style||m.style===style||(style==='central'&&['central','west'].includes(m.style)));
   if(cook==='quick') choices=choices.filter(m=>(m.minutes||20)<=15);
   else if(cook==='medium') choices=choices.filter(m=>(m.minutes||25)<=30);
   if(budget==='low') choices=choices.filter(m=>!m.budget||m.budget==='low');
   else if(budget==='mid') choices=choices.filter(m=>!m.budget||m.budget!=='premium');
   if(!choices.length){choices=indianMealIdeas.filter(m=>m.slot===slot&&!used.has(m.name)&&!avoid.some(a=>(m.name+' '+m.items.map(x=>x[0]).join(' ')).toLowerCase().includes(a)));}
   choices.sort((a,b)=>{
     const score=m=>{
       let v=0;
       v+=mealPreferenceScore(m,pref); if(priority==='protein'||focus==='protein')v+=m.protein*3;
       if(priority==='budget')v+=((m.budget||'low')==='low'?30:0)-m.kcal*.015;
       if(focus==='fiber'&&/dal|chana|rajma|sprout|vegetable|roti|millet|sabzi/i.test(m.name))v+=18;
       if(focus==='light')v-=m.kcal*.05;
       if(focus==='energy')v+=m.kcal*.04;
       if(priority==='balanced')v-=Math.abs(m.kcal-target*(slot==='Lunch'||slot==='Dinner'?.28:.16))*.03;
       if(m.goal?.includes(goal))v+=8;
       return v;
     }; return score(b)-score(a);
   });
   const chosen=choices[0]||indianMealIdeas.find(m=>m.slot===slot)||indianMealIdeas[0]; used.add(chosen.name);return chosen;
 });
 const total=plans.reduce((a,m)=>a+m.kcal,0), prot=plans.reduce((a,m)=>a+m.protein,0);
 out.innerHTML=`<div class="smart-meal-summary"><div><span>Suggested menu</span><b>${plans.length} meals</b></div><div><span>Approx. energy</span><b>${total} kcal</b></div><div><span>Approx. protein</span><b>${prot} g</b></div></div><p class="muted nutrition-match-note">Personalized for ${goal} goal · ${pref==='protein'?'protein-rich foods':pref==='carb'?'carb-rich foods':'balanced foods'} · ${focus} focus${avoid.length?' · avoiding '+avoid.join(', '):''}. If filters are too restrictive, the engine relaxes style/time filters while keeping diet and avoid terms.</p>`+plans.map((m,i)=>`<article class="smart-meal indian-smart-meal"><div class="indian-meal-top"><span class="meal-slot">${m.slot}</span><span class="meal-tag">${m.tag}</span></div><h4>${m.name}</h4><p class="indian-ingredients">${m.items.map(x=>`${x[1]}g ${x[0]}`).join(' · ')}</p><div class="indian-meal-stats"><b>~${m.kcal} kcal</b><span>Protein ~${m.protein} g</span></div><button class="btn light small-btn" onclick="addSuggestedMeal(${i})">Add ingredients to meal builder +</button></article>`).join('');
 window.currentIndianPlan=plans;
 document.querySelectorAll('.nutrition-choice').forEach(b=>b.classList.toggle('selected',b.dataset.pref===pref));
}

function addSuggestedMeal(index){
 const m=window.currentIndianPlan?.[index]; if(!m)return;
 m.items.forEach(([name,grams])=>{let f=foods.find(x=>x.name.toLowerCase()===name.toLowerCase());if(!f&&name==='Vegetable Khichdi')f=foods.find(x=>x.name==='Khichdi');if(!f)return;meal.push({...f,grams});});renderMeal();renderAdvancedNutrition();
}

function getFitnessRecommendations(){
 if(!profile)return [];
 const goal=profile.goal||'maintain', level=profile.fitnessLevel||'beginner', minutes=Number(profile.exerciseMinutes)||30, bmi=Number(profile.bmi)||22, age=Number(profile.age)||30;
 const levelRank={beginner:1,intermediate:2,advanced:3}[level]||1;
 const scored=exercises.map(e=>{
   let score=0;
   if(e.goals.includes(goal)) score+=45;
   if(e.level===level) score+=24;
   else if(Math.abs(({beginner:1,intermediate:2,advanced:3}[e.level]||1)-levelRank)===1) score+=10;
   if(goal==='loss' && ['cardio','core'].includes(e.type)) score+=18;
   if(goal==='gain' && e.type==='strength') score+=22;
   if(goal==='maintain' && ['strength','cardio','yoga'].includes(e.type)) score+=10;
   if(minutes<20 && e.level==='beginner') score+=12;
   if(minutes>=30 && e.level!=='advanced') score+=5;
   if(bmi>=30 && ['cardio','yoga'].includes(e.type)) score+=12;
   if(bmi>=30 && e.level==='advanced') score-=35;
   if(bmi<18.5 && goal==='gain' && e.type==='strength') score+=15;
   if(age>=45 && e.type==='yoga') score+=8;
   if(age>=55 && e.level==='advanced') score-=25;
   return {...e,score};
 }).filter(e=>e.score>0).sort((a,b)=>b.score-a.score);
 const chosen=[]; const usedTypes=new Set();
 for(const e of scored){
   if(chosen.length>=6)break;
   // Keep the plan varied: do not fill all six slots with one category.
   if(chosen.length<4 && usedTypes.has(e.type) && [...usedTypes].length<3) continue;
   chosen.push(e); usedTypes.add(e.type);
 }
 return chosen.length?chosen:exercises.slice(0,6);
}
function renderFitnessRecommendations(){
 const box=$('fitnessRecommendations'); if(!box)return;
 if(!profile){box.innerHTML='<div class="personal-rec empty"><div><b>Personalized workout plan</b><p>Complete your profile to get exercise and yoga choices based on your goal, activity and fitness level.</p></div></div>';return;}
 const rec=getFitnessRecommendations();
 box.innerHTML=`<div class="personal-rec"><div><span class="eyebrow">RECOMMENDED FOR YOU</span><h3>${profile.goal==='loss'?'Fat-loss focused movement':profile.goal==='gain'?'Strength & muscle-building plan':'Balanced fitness plan'}</h3><p>Matched to your ${profile.goal} goal • BMI ${profile.bmi.toFixed(1)} • ${profile.fitnessLevel} level • ${profile.exerciseMinutes} min/day.</p><div class="plan-reason">${profile.goal==='loss'?'Priority: calorie-burning cardio + core with recovery yoga.':profile.goal==='gain'?'Priority: progressive strength + recovery yoga.':'Priority: balanced cardio, strength and mobility.'}</div></div><div class="rec-mini-list">${rec.map(e=>`<button onclick="showExerciseByName('${e.name}')"><img src="${e.image}" alt="Human demonstration of ${e.name}"><span>${e.name}</span></button>`).join('')}</div></div>`;
}
function visualSVG(kind){const map={walk:'<circle cx="38" cy="18" r="7"/><path d="M38 25l-5 20 12 12M34 32L20 42M36 45l-12 17M45 57l13 8"/>',run:'<circle cx="40" cy="16" r="7"/><path d="M40 24l-8 19 15 9M35 32L20 39M38 43l-17 17M47 52l14 1"/>',cycle:'<circle cx="25" cy="56" r="12"/><circle cx="63" cy="56" r="12"/><path d="M25 56l15-25 10 25M40 31l23 25M40 31h-9M50 56h-10"/>',squat:'<circle cx="43" cy="16" r="7"/><path d="M43 24l-5 20 13 8M38 31l-16 7M51 52l13 8M38 44l-7 15"/>',push:'<circle cx="53" cy="23" r="7"/><path d="M48 29L28 45l-17 1M28 45l7 13M48 29l13 10"/>',bridge:'<circle cx="60" cy="39" r="7"/><path d="M54 42L37 29 21 41M21 41l-9 18M37 29l11 30M48 59h16"/>',plank:'<circle cx="63" cy="29" r="7"/><path d="M57 34L30 45 12 51M30 45l5 14M12 51l-5 10M30 45l12 9"/>',cat:'<circle cx="50" cy="22" r="6"/><path d="M44 27c-17 2-22 15-28 17M20 44l-9 12M36 40l10 15M19 42l-9-3"/>',tadasana:'<circle cx="42" cy="15" r="7"/><path d="M42 23v31M42 30L25 20M42 30l17-10M42 54L29 64M42 54l13 10"/>',cobra:'<circle cx="57" cy="28" r="6"/><path d="M52 33c-18 1-26 9-29 21M23 54h39M34 52l-8 10M49 52l8 10"/>',vajra:'<circle cx="43" cy="20" r="7"/><path d="M43 27v17M43 33l-14 8M43 33l14 8M43 44l-15 14M43 44l15 14"/>',child:'<circle cx="25" cy="38" r="6"/><path d="M30 41l18 10 13-1M48 51l8 9M30 41l-14 14"/>',triangle:'<circle cx="55" cy="15" r="6"/><path d="M55 21L39 59M39 59L16 59M39 59l24-36M31 39h30M55 21l-7-9"/>',bridge:'<circle cx="62" cy="37" r="6"/><path d="M56 41L39 27 21 40M21 40l-8 18M39 27l11 31M50 58h15"/>'};return `<svg class="pose-svg" viewBox="0 0 80 75" aria-hidden="true">${map[kind]||map.tadasana}</svg>`}
function renderFitness(list=exercises){
 renderFitnessRecommendations();
 $('fitnessGrid').innerHTML=list.map(e=>{const m=getMeta(e);return `<div class="rec-card fitness-card human-visual-card reveal-card"><div class="visual-art human-photo"><img src="${e.image}" alt="Correct human demonstration of ${e.name}" loading="lazy"><span>${e.icon}</span></div><div class="rec-content"><span>${e.tag} • ${e.level.toUpperCase()}</span><h3>${e.name}</h3><p>${e.detail}</p><small class="exercise-meta">${m.muscles} • ${m.equipment}</small><button class="btn light" onclick="showExerciseByName('${e.name}')">Visual guide</button></div></div>`}).join('')
}
function filterFitness(type,btn){document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderFitness(type==='all'?exercises:exercises.filter(e=>e.type===type))}
function showExerciseByName(name){const e=exercises.find(x=>x.name===name);if(!e)return;$('modalTitle').textContent=e.name;const meta=getMeta(e);$('modalVisual').innerHTML=`<div class="modal-pose human-modal-photo"><img src="${e.image}" alt="${e.name} human demonstration"></div><div class="steps-box"><b>How to do it</b><p>${e.steps}</p><small>${e.detail}</small><div class="modal-meta"><span>🎯 ${meta.muscles}</span><span>🏷️ ${meta.equipment}</span><span>⚡ ${meta.impact} impact</span></div></div>`;$('modalText').textContent='Stop if you feel pain, dizziness or unusual discomfort.';$('modal').classList.add('show')}
function showExercise(i){showExerciseByName(typeof i==='number' ? exercises[i]?.name : i)}

function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function getProgress(){return JSON.parse(localStorage.getItem('human360Progress')||'[]')}
function saveDailySnapshot(force=false){if(!profile)return;let arr=getProgress(),d=today(),existing=arr.find(x=>x.date===d);const row={date:d,weight:profile.w,water:profile.water,exercise:profile.exerciseMinutes,calories:Math.round(profile.goalCal)};if(existing)Object.assign(existing,row);else arr.push(row);localStorage.setItem('human360Progress',JSON.stringify(arr.slice(-30)));if(!force)renderProgress()}
function quickLog(metric, amount){
 if(!profile){alert('Please complete your profile first, then use quick logging.');go('profile');return;}
 const arr=getProgress(),d=today();let row=arr.find(x=>x.date===d);
 if(!row){row={date:d,weight:profile.w,water:profile.water,exercise:0,calories:Math.round(profile.goalCal)};arr.push(row);}
 if(metric==='water') row.water=Math.round(((Number(row.water)||profile.water)+amount)*10)/10;
 if(metric==='exercise') row.exercise=(Number(row.exercise)||0)+amount;
 localStorage.setItem('human360Progress',JSON.stringify(arr.slice(-30)));
 const labels={water:`Water logged: ${Number(row.water).toFixed(1)} L today.`,exercise:`Activity logged: ${row.exercise} minutes today.`};
 renderProgress();renderStreak();renderAdvanced();
 const toast=document.querySelector('.welcome-toast');if(toast){toast.textContent=labels[metric]||'Progress updated';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);}else alert(labels[metric]||'Progress updated');
}
function saveProgress(){if(!profile){alert('Create your profile first.');return}let arr=getProgress(),d=today(),row={date:d,weight:num('trackWeight')||profile.w,water:num('trackWater')||profile.water,exercise:num('trackExercise'),calories:num('trackCalories')||Math.round(profile.goalCal)},existing=arr.find(x=>x.date===d);if(existing)Object.assign(existing,row);else arr.push(row);localStorage.setItem('human360Progress',JSON.stringify(arr.slice(-30)));$('progressSaved').textContent='Today\'s progress saved.';renderProgress()}
function clearProgress(){if(confirm('Clear all saved progress?')){localStorage.removeItem('human360Progress');renderProgress();renderStreak()}}
function pointsFor(key){return getProgress().filter(x=>Number.isFinite(Number(x[key])))}
function lineSVG(points,key,label){if(points.length<1)return '<p class="muted">Add at least one check-in to see your graph.</p>';const vals=points.map(x=>Number(x[key])),min=Math.min(...vals),max=Math.max(...vals),range=max-min||1,w=640,h=210,pad=28;const coords=vals.map((v,i)=>[pad+i*(w-pad*2)/Math.max(1,vals.length-1),h-pad-(v-min)/range*(h-pad*2)]);const path=coords.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');const circles=coords.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="4"/><text x="${p[0]}" y="${h-7}" text-anchor="middle">${points[i].date.slice(5)}</text>`).join('');return `<svg class="line-chart" viewBox="0 0 ${w} ${h}"><line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}"/><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}"/><path d="${path}" fill="none" stroke="currentColor" stroke-width="3"/><g>${circles}</g><text x="${pad}" y="16">${label}: ${vals[vals.length-1].toFixed(1)}</text></svg>`}
function renderProgress(){const arr=getProgress();$('trackWeight').value=profile?.w||'';$('trackWater').value=profile?.water?.toFixed(1)||'';$('trackExercise').value=profile?.exerciseMinutes||'';$('trackCalories').value=profile?.goalCal?Math.round(profile.goalCal):'';$('weightChart').innerHTML=lineSVG(arr,'weight','kg');$('waterChart').innerHTML=lineSVG(arr,'water','L');$('dashboardProgressChart').innerHTML=lineSVG(arr,'weight','Weight');$('weightTrendText').textContent=trendText(arr,'weight','kg');$('waterTrendText').textContent=trendText(arr,'water','L');$('progressTable').innerHTML=arr.length?`<div class="progress-table">${arr.slice().reverse().map(x=>`<div><b>${x.date}</b><span>${Number(x.weight).toFixed(1)} kg</span><span>${Number(x.water).toFixed(1)} L</span><span>${x.exercise||0} min</span></div>`).join('')}</div>`:'<p class="muted">No saved check-ins yet.</p>'}
function trendText(arr,key,unit){if(arr.length<2)return 'Waiting for trend';const a=Number(arr[arr.length-2][key]),b=Number(arr[arr.length-1][key]);return `${b>a?'↑':'↓'} ${Math.abs(b-a).toFixed(1)} ${unit}`}

function saveGoals(){if(!profile){alert('Create your profile first.');return}const target=num('targetWeight'),weeks=Math.max(1,num('targetWeeks')||12),water=num('targetWater')||profile.water,exercise=num('targetExercise')||150,steps=num('targetSteps')||7000,sleep=num('targetSleep')||8;if(!target){alert('Enter a target weight.');return}const diff=target-profile.w,weekly=diff/weeks,plan={target,weeks,water,exercise,steps,sleep,weekly,goal:profile.goal,startWeight:profile.w,startDate:today()};localStorage.setItem('human360Goals',JSON.stringify(plan));$('goalSaved').textContent='Personalized goal plan created.';renderGoals();renderReport()}
function renderGoals(){const g=JSON.parse(localStorage.getItem('human360Goals')||'null');if(!g){$('goalCards').innerHTML='<p class="muted">Create your goal plan to see milestones.</p>';return}$('goalCards').innerHTML=`<div class="goal-stat"><span>Start</span><b>${g.startWeight.toFixed(1)} kg</b></div><div class="goal-stat"><span>Target</span><b>${Number(g.target).toFixed(1)} kg</b></div><div class="goal-stat"><span>Weekly pace</span><b>${Math.abs(g.weekly).toFixed(2)} kg/week</b></div><div class="goal-stat"><span>Timeline</span><b>${g.weeks} weeks</b></div><div class="goal-stat"><span>Exercise</span><b>${g.exercise} min/week</b></div><div class="goal-stat"><span>Daily steps</span><b>${g.steps.toLocaleString()}</b></div><div class="goal-stat"><span>Sleep</span><b>${g.sleep} h/night</b></div>`;const current=profile?.w||g.startWeight,total=Math.abs(g.target-g.startWeight),done=total?Math.min(100,Math.max(0,Math.abs(current-g.startWeight)/total*100)):0;$('goalProgressBars').innerHTML=`<div class="goal-progress"><div><span>Overall progress</span><b>${Math.round(done)}%</b></div><div class="bar"><i style="width:${done}%"></i></div></div><div class="milestones">${[25,50,75,100].map(v=>`<span class="${done>=v?'reached':''}">${v}%</span>`).join('')}</div>`}

function renderDashboardChart(){if(profile) $('dashboardProgressChart').innerHTML=lineSVG(getProgress(),'weight','Weight')}
function renderReport(){if(!profile){$('reportBody').innerHTML='<p class="muted">Calculate your profile first.</p>';return}const p=profile;$('reportDate').textContent=new Date().toLocaleDateString(undefined,{day:'numeric',month:'long',year:'numeric'});$('reportScore').textContent=p.score+'/100';$('reportBody').innerHTML=`<div class="report-line"><span>BMI</span><b>${p.bmi.toFixed(1)}</b></div><div class="report-line"><span>BMR</span><b>${Math.round(p.bmr)} kcal/day</b></div><div class="report-line"><span>Maintenance calories</span><b>${Math.round(p.cal)} kcal/day</b></div><div class="report-line"><span>Goal calories</span><b>${Math.round(p.goalCal)} kcal/day</b></div><div class="report-line"><span>Water target</span><b>${p.water.toFixed(1)} L/day</b></div><div class="report-line"><span>Heart rate zone</span><b>${p.hr1}–${p.hr2} bpm</b></div>`;$('reportProgressChart').innerHTML=lineSVG(getProgress(),'weight','Weight');const g=JSON.parse(localStorage.getItem('human360Goals')||'null');$('reportGoalVisual').innerHTML=g?`<div class="goal-report"><div><span>Target</span><b>${g.target} kg</b></div><div><span>Timeline</span><b>${g.weeks} weeks</b></div><div><span>Exercise</span><b>${g.exercise} min/week</b></div><div><span>Steps</span><b>${g.steps}/day</b></div></div>`:'<p class="muted">No goal plan saved.</p>';const cal=Math.max(1,p.goalCal),prot=Math.round(p.w*(p.goal==='loss'?1.6:p.goal==='gain'?1.5:1.3)),fat=Math.round(cal*.27/9),carb=Math.max(80,Math.round((cal-prot*4-fat*9)/4)),sum=prot*4+fat*9+carb*4;$('reportMacroVisual').innerHTML=`<div class="macro-bars"><div><span>Protein</span><b>${Math.round(prot*4/sum*100)}%</b><i style="width:${prot*4/sum*100}%"></i></div><div><span>Carbs</span><b>${Math.round(carb*4/sum*100)}%</b><i style="width:${carb*4/sum*100}%"></i></div><div><span>Fat</span><b>${Math.round(fat*9/sum*100)}%</b><i style="width:${fat*9/sum*100}%"></i></div></div>`}

function info(t,m){$('modalTitle').textContent=t;$('modalVisual').innerHTML='';$('modalText').textContent=m;$('modal').classList.add('show')}function closeModal(){$('modal').classList.remove('show')}
$('themeBtn').onclick=()=>document.body.classList.toggle('darkmode');
window.addEventListener('DOMContentLoaded',()=>{authInit();renderFoods();renderFitness();renderGoals();renderProgress();renderStreak();renderAdvanced();renderAdvancedNutrition();generateSmartMeals();generateAdvancedWorkout();let p=JSON.parse(localStorage.getItem('human360V2')||'null');if(p&&!profile){profile=p;populateProfile(p);updateUI()} });


// HUMAN360 V10 — adaptive plan, analytics, achievements and data export
function getWeeklyStats(){
 const arr=getProgress();
 const recent=arr.slice(-7);
 const avg=(key)=>recent.length?recent.reduce((a,x)=>a+(Number(x[key])||0),0)/recent.length:0;
 const weightStart=recent.length?Number(recent[0].weight)||0:0;
 const weightEnd=recent.length?Number(recent[recent.length-1].weight)||0:0;
 return {days:recent.length,avgWater:avg('water'),avgExercise:avg('exercise'),avgCalories:avg('calories'),weightChange:weightEnd-weightStart};
}
function generateSmartPlan(force=false){
 if(!profile){if(force)alert('Complete your profile first.');return;}
 const p=profile, goal=p.goal, level=p.fitnessLevel;
 let main=goal==='loss'?'25–35 min brisk cardio + 15–20 min strength':goal==='gain'?'35–45 min progressive strength + 10 min easy cardio':'25–30 min mixed cardio + 20 min strength';
 if(level==='beginner') main=goal==='loss'?'20–30 min brisk walking + 10–15 min beginner strength':'20–30 min beginner strength + 10 min easy walking';
 if(level==='advanced') main=goal==='loss'?'30–40 min Zone 2 cardio + 20 min strength':'40–50 min progressive strength + 10 min mobility';
 const plan=[
  {time:'Morning',icon:'☀️',title:'Hydrate & activate',text:`Start with 300–500 ml water and 5–8 min of gentle mobility.`},
  {time:'Main workout',icon:'🏋️',title:'Training block',text:`${main}. Keep most cardio around ${p.hr1}–${p.hr2} bpm.`},
  {time:'After training',icon:'🥗',title:'Recovery meal',text:`Aim for a protein-rich meal and follow your ${Math.round(p.goalCal)} kcal daily target.`},
  {time:'Evening',icon:'🧘',title:'Cool down & reset',text:`5–10 min yoga/mobility, easy breathing and finish your ${p.water.toFixed(1)} L hydration target.`}
 ];
 $('planHeroTitle').textContent=goal==='loss'?'Smart fat-loss routine':goal==='gain'?'Strength & healthy-gain routine':'Balanced health routine';
 $('planHeroText').textContent=`Built for a ${level} level, ${p.exerciseMinutes} min/day availability and your ${p.goal==='loss'?'weight-loss':p.goal==='gain'?'weight-gain':'maintenance'} goal.`;
 $('smartPlanTimeline').innerHTML=plan.map((x,i)=>`<div class="plan-step"><div class="plan-step-icon">${x.icon}</div><div class="plan-step-body"><small>${x.time}</small><h3>${x.title}</h3><p>${x.text}</p></div><span class="plan-step-num">${i+1}</span></div>`).join(''); $('todayPlanList').innerHTML=plan.slice(0,4).map(x=>`<div class="today-plan-item"><div class="today-plan-icon">${x.icon}</div><div><b>${x.title}</b><small>${x.time} • ${x.text}</small></div></div>`).join(''); const todayRow=getProgress().find(x=>x.date===today()); $('planCompletion').textContent=todayRow?'100%':'0%';
 $('planNutrition').innerHTML=`<div><span>Calories</span><b>${Math.round(p.goalCal)} kcal</b></div><div><span>Protein</span><b>${Math.round(p.w*(goal==='loss'?1.6:goal==='gain'?1.5:1.3))} g</b></div><div><span>Water</span><b>${p.water.toFixed(1)} L</b></div><div><span>HR focus</span><b>${p.hr1}–${p.hr2} bpm</b></div>`;
 $('planRecovery').innerHTML=`<div class="recovery-item">✓ Warm up before hard exercise</div><div class="recovery-item">✓ Increase training gradually</div><div class="recovery-item">✓ Take easier days when needed</div><div class="recovery-item">✓ Stop for pain, dizziness or unusual symptoms</div>`;
}
function renderAdvanced(){
 if(!$('weeklyAnalytics'))return;
 const s=getWeeklyStats();
 $('weeklyAnalytics').innerHTML=`<div class="analytics-item"><span>Check-ins</span><b>${s.days}/7</b></div><div class="analytics-item"><span>Avg exercise</span><b>${Math.round(s.avgExercise)} min</b></div><div class="analytics-item"><span>Avg water</span><b>${s.avgWater.toFixed(1)} L</b></div><div class="analytics-item"><span>Weight change</span><b>${s.weightChange>0?'+':''}${s.weightChange.toFixed(1)} kg</b></div>`;
 generateSmartPlan(false);
}

function exportHuman360Data(){
 const payload={exportedAt:new Date().toISOString(),profile,progress:getProgress(),goals:JSON.parse(localStorage.getItem('human360Goals')||'null'),meal};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='human360-backup-'+today()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
