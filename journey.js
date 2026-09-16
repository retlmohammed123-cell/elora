const journeyData=[
{en:"SELF",title:"من أنا؟",text:"اكتشف اهتماماتك ونقاط قوتك ومهاراتك والأسئلة التي تثير فضولك.",tags:["الاهتمامات","نقاط القوة","المهارات"]},
{en:"FIELDS",title:"ما المجالات الموجودة أمامي؟",text:"استكشف المجالات والتخصصات والمسارات المختلفة قبل أن تتخذ قرارًا.",tags:["المجالات","التخصصات","الخيارات"]},
{en:"DEEP DIVE",title:"ماذا يحدث داخل المجال؟",text:"انتقل من الاسم والصورة السطحية إلى فهم حقيقي لما يحدث داخل المجال.",tags:["فهم","بحث","تعمق"]},
{en:"APPLY",title:"كيف أجرّب وأطبّق؟",text:"حوّل المعرفة إلى مشروع أو تجربة أو تحدٍ عملي.",tags:["تجربة","مشروع","تطبيق"]},
{en:"MIND",title:"كيف أفهم نفسي وأتعامل مع الضغوط؟",text:"افهم المشاعر والمقارنة والفشل والضغط، وابحث عن طرق صحية للتعامل معها.",tags:["وعي","ضغط","توازن"]},
{en:"SOCIETY",title:"كيف أفهم المشكلات من حولي؟",text:"حلل المشكلات الاجتماعية من خلال أسبابها وآثارها والسياق المحيط بها.",tags:["المشكلة","الأسباب","الآثار"]},
{en:"WORLD",title:"كيف يتعامل العالم مع المشكلات والفرص؟",text:"استخدم التجارب ودراسات الحالة لفهم القرارات والبدائل والنتائج.",tags:["حالات","قرارات","نتائج"]},
{en:"OPPORTUNITY",title:"إلى أين يمكن أن أذهب بما تعلمته؟",text:"اربط ما اكتشفته بالتجارب والمشروعات والفرص والخطوات القادمة.",tags:["فرص","مشروعات","خطوة قادمة"]}
];
const box=document.getElementById("journeySteps");if(box){journeyData.forEach((d,i)=>{const b=document.createElement("button");b.className="journey-btn"+(i===0?" active":"");b.innerHTML=`<b>${String(i+1).padStart(2,"0")}</b><span>${d.en}</span>`;b.onclick=()=>showJourney(i);box.appendChild(b)});showJourney(0)}
function showJourney(i){const d=journeyData[i];document.querySelectorAll(".journey-btn").forEach((b,n)=>b.classList.toggle("active",n===i));document.getElementById("panelNo").textContent=String(i+1).padStart(2,"0");document.getElementById("panelEn").textContent=d.en;document.getElementById("panelTitle").textContent=d.title;document.getElementById("panelText").textContent=d.text;document.getElementById("panelTags").innerHTML=d.tags.map(t=>`<span>${t}</span>`).join("")}