import {Component, Input, signal, computed, viewChild, ElementRef, LOCALE_ID} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, registerLocaleData} from '@angular/common';
import localeTr from '@angular/common/locales/tr';
registerLocaleData(localeTr);

@Component({selector:'motor-art',standalone:true,template:`
<svg viewBox="0 0 700 400" role="img" [attr.aria-label]="label">
<ellipse cx="356" cy="345" rx="268" ry="17" fill="#102b25" opacity=".12"/>
<g fill="#202a29" stroke="#111d1b" stroke-width="8"><circle cx="160" cy="280" r="77"/><circle cx="543" cy="280" r="77"/></g>
<g fill="#afb8b4" stroke="#687b74" stroke-width="7"><circle cx="160" cy="280" r="54"/><circle cx="543" cy="280" r="54"/></g>
<g fill="none" stroke="#324a41" stroke-width="7"><path d="M160 226v108m-54-54h108m-92-38 76 76m0-76-76 76M543 226v108m-54-54h108m-92-38 76 76m0-76-76 76"/></g>
<path d="M160 280 276 188 361 274 160 280 238 223 403 223 456 159" fill="none" stroke="#263c35" stroke-width="18" stroke-linejoin="round"/>
<path d="m474 146 69 134" stroke="#aab7ae" stroke-width="17"/><path d="m489 183 54 97" stroke="#344c42" stroke-width="20"/>
<path d="M107 206 Q146 166 205 198L239 235 193 229Q150 208 107 226Z" [attr.fill]="color"/>
<path d="M479 236q66-47 110 10" fill="none" [attr.stroke]="color" stroke-width="14"/>
<path d="M213 151 293 153 320 176 254 197 163 173 142 154Z" fill="#172a23"/>
<path d="M294 154q43-46 112-17l48 46-48 43-94-14-38-34Z" [attr.fill]="color"/>
<path d="M312 158q36-30 80-13" stroke="white" opacity=".45" fill="none" stroke-width="6"/>
<path d="m298 223 75-5 26 58-91 15-30-30Z" fill="#51625a" stroke="#243a30" stroke-width="7"/>
<path d="m304 237 68-4m-64 19 69-4m-63 19 61-4" stroke="#a9b0a8" stroke-width="5"/>
<path d="m390 245 26 48 60 8" fill="none" stroke="#697e70" stroke-width="12"/><path d="m402 300 87 5" stroke="#263b31" stroke-width="20" stroke-linecap="round"/>
<path d="m454 165-19-51-29-9m26 10 45-16" fill="none" stroke="#223e30" stroke-width="10" stroke-linecap="round"/>
<path d="m453 143 32-6 14 29-34 8Z" fill="#f4eac8" stroke="#314b3e" stroke-width="7"/>
<path d="m428 109-6-29" stroke="#263b31" stroke-width="6"/><ellipse cx="411" cy="78" rx="20" ry="9" fill="#263b31"/>
<circle cx="160" cy="280" r="13" fill="#d3dbd3"/><circle cx="543" cy="280" r="13" fill="#d3dbd3"/>
<text x="331" y="184" fill="white" font-size="16" font-family="Arial" font-weight="bold" letter-spacing="3">MOTO</text>
</svg>`})
class MotorArt { @Input() color='#f47b46'; @Input() label='Temsili motosiklet illüstrasyonu'; }
interface Motor {id:number;name:string;category:string;cc:number;gear:string;price:number;color:string;tag:string;}
const inventory:Motor[]=[
{id:1,name:'Honda PCX 125',category:'Scooter',cc:125,gear:'Otomatik',price:850,color:'#d0bb97',tag:'Şehrin favorisi'},
{id:2,name:'Yamaha MT-07',category:'Naked',cc:689,gear:'Manuel',price:1800,color:'#596d77',tag:'Biraz daha özgürlük'},
{id:3,name:'Honda Africa Twin',category:'Adventure',cc:1084,gear:'Manuel',price:2500,color:'#d76543',tag:'Yeni yollar keşfet'},
{id:4,name:'Yamaha NMAX 155',category:'Scooter',cc:155,gear:'Otomatik',price:950,color:'#819888',tag:'Kolay & pratik'},
{id:5,name:'KTM 390 Duke',category:'Naked',cc:399,gear:'Manuel',price:1500,color:'#ed873e',tag:'Enerjini yola taşı'},
{id:6,name:'BMW G 310 GS',category:'Adventure',cc:313,gear:'Manuel',price:1700,color:'#b5a674',tag:'Hafta sonu kaçamağı'}];
function dateAfter(days:number){const d=new Date();d.setDate(d.getDate()+days);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
@Component({selector:'app-root',standalone:true,imports:[FormsModule,CurrencyPipe,MotorArt],template:`
<header><a class="brand" href="#" aria-label="MotoRent ana sayfa"><span class="brand-icon">m.</span>Moto<span>Rent</span></a><nav aria-label="Ana menü"><a href="#fleet">Motorları keşfet</a><a href="#how">Nasıl çalışır?</a><a href="#faq">Merak edilenler</a></nav><a class="nav-button" href="#fleet">Rotanı seç <span>↗</span></a></header>
<main>
<section class="hero"><div class="hero-copy"><div class="eyebrow"><i></i> ANTALYA’DA YENİ BİR ROTA</div><h1>İki teker.<br>Sonsuz <em>özgürlük.</em></h1><p>Şehrin ritmini yakala, sahil yolunda kaybol.<br>Sana uygun motoru seç, kendi hikâyene yola çık.</p><a class="button primary" href="#fleet">Motorları keşfet <span>↗</span></a><div class="hero-proof"><span>↗ Kolay seçim</span><span>◎ Şeffaf demo fiyatları</span></div></div><div class="hero-visual"><span class="vertical-text">TAKE THE SCENIC ROUTE</span><div class="sun"></div><div class="road"></div><motor-art color="#e77746" label="Turuncu motosikletin temsili illüstrasyonu"/><div class="visual-label"><span>HER YOL BİR BAŞLANGIÇ</span><strong>Bir sonraki durak: senin rotan.</strong></div><div class="coordinate">36.8969° N &nbsp; 30.7133° E</div></div></section>
<section class="search-panel" aria-label="Kiralama tarihleri"><label><span>↗ TESLİM NOKTASI</span><select [(ngModel)]="location"><option>Antalya Merkez</option><option>Konyaaltı</option><option>Lara</option></select></label><label><span>▦ ALIŞ TARİHİ</span><input type="date" [min]="today" [ngModel]="start()" (ngModelChange)="start.set($event);confirmed.set(false)" aria-label="Alış tarihi"></label><label><span>▦ DÖNÜŞ TARİHİ</span><input type="date" [min]="start() || today" [ngModel]="end()" (ngModelChange)="end.set($event);confirmed.set(false)" aria-label="Dönüş tarihi"></label><button class="button primary" (click)="search()">Motor bul <span>↗</span></button></section>
@if(dateError()){<p class="error date-error" role="alert">{{dateError()}}</p>}
<div class="demo-notice"><span>DEMO</span> Bu bir portföy projesidir. Modeller, ücretler ve teslim noktaları örnektir; gerçek kiralama yapılmaz.</div>
<section id="fleet" class="fleet"><div class="section-heading"><div class="eyebrow">SENİN YOLUN, SENİN MOTORUN</div><div class="heading-row"><h2>Yol arkadaşını seç.</h2><p>Şehir içinden uzun rotalara,<br>her yolculuğa bir motor.</p></div></div><div class="filter-row"><div class="tabs" aria-label="Motor kategorisi">@for(cat of categories;track cat){<button [class.active]="category()===cat" [attr.aria-pressed]="category()===cat" (click)="category.set(cat)">{{cat}}</button>}</div><label class="sort">Sırala <select [ngModel]="sort()" (ngModelChange)="sort.set($event)" aria-label="Motorları sırala"><option value="recommended">Önerilenler</option><option value="asc">Fiyat: düşükten yükseğe</option><option value="desc">Fiyat: yüksekten düşüğe</option></select></label></div><p class="result-count" aria-live="polite">{{motors().length}} motor · {{days()}} günlük yolculuk @if(searched()){<span> · Seçilen nokta: {{location}}</span>}</p>
<div class="motor-grid">@for(motor of motors();track motor.id){<article class="motor-card"><div class="card-art"><span class="tag">{{motor.tag}}</span><motor-art [color]="motor.color" [label]="motor.name + ' için temsili illüstrasyon'"/><span class="art-caption">Temsili illüstrasyon</span></div><div class="card-body"><div class="category-label">{{motor.category}}</div><h3>{{motor.name}}</h3><div class="specs"><span>◉ {{motor.cc}} cc</span><span>⚙ {{motor.gear}}</span><span>♧ 2 kişi</span></div><div class="card-bottom"><div><strong>{{motor.price | currency:'TRY':'symbol':'1.0-0'}}</strong><span> / gün</span><small>{{motor.price*days() | currency:'TRY':'symbol':'1.0-0'}} / {{days()}} gün</small></div><button class="select-button" (click)="selectMotor(motor)" [attr.aria-label]="motor.name + ' seç'">İncele <span>↗</span></button></div></div></article>}</div></section>
<section class="how" id="how"><div><div class="eyebrow">AZ PLAN, ÇOK YOL</div><h2>Yola çıkmak<br>bu kadar kolay.</h2></div><div class="step"><span>01</span><h3>Motorunu bul</h3><p>Tarzına ve rotana uygun<br>yol arkadaşını seç.</p></div><div class="step"><span>02</span><h3>Tarihlerini seç</h3><p>Yolculuğunun süresini belirle,<br>örnek toplam ücreti gör.</p></div><div class="step"><span>03</span><h3>Planını incele</h3><p>Demo rezervasyon özetini aç,<br>bir sonraki rotanı hayal et.</p></div></section>
<section class="route-banner"><div><div class="eyebrow">ŞEHRİN DIŞINDA BİR DÜNYA VAR</div><h2>Bir hafta sonu.<br>Bin güzel ihtimal.</h2><p>Konyaaltı’ndan sahile, sahilden yeni hikâyelere.</p><a class="button light" href="#fleet" (click)="category.set('Adventure')">Maceraya göz at ↗</a></div><div class="route-drawing" aria-hidden="true"><span>ANTALYA</span><svg viewBox="0 0 400 220"><path d="M30 190C330 220 60 40 240 60S390 170 360 20" fill="none" stroke="#bed0a4" stroke-width="3" stroke-dasharray="8 10"/><circle cx="30" cy="190" r="9" fill="#ed8757"/><circle cx="360" cy="20" r="9" fill="#ed8757"/></svg><strong>SIRADAKİ MACERAN ↗</strong></div></section>
<section id="faq" class="faq"><div><div class="eyebrow">AKLINDA KALMASIN</div><h2>Merak edilenler.</h2></div><div class="questions"><details><summary>Bu siteden gerçek motor kiralayabilir miyim?</summary><p>Hayır. MotoRent bir yazılım portföyü demosudur. Ödeme alınmaz ve gerçek rezervasyon oluşturulmaz.</p></details><details><summary>Ücret nasıl hesaplanıyor?</summary><p>Alış ve dönüş tarihi arasındaki gün sayısı günlük örnek ücretle çarpılır. Dönüş tarihi alış tarihinden sonra olmalıdır. Bu hesap gerçek bir fiyat teklifi değildir.</p></details><details><summary>Motor görselleri gerçek modelleri mi gösteriyor?</summary><p>Görseller özel hazırlanmış temsili illüstrasyonlardır; listelenen modellerin birebir görselleri değildir. Teknik bilgiler ve fiyatlar demo amaçlıdır.</p></details></div></section>
</main><footer><a class="brand" href="#"><span class="brand-icon">m.</span>Moto<span>Rent</span></a><span>İyi yollar, güzel hikâyeler.</span><a href="https://github.com/enesbatuhanaydevelopment/motorent" target="_blank" rel="noopener noreferrer">GitHub’da incele ↗</a><small>© {{year}} MotoRent · Portföy demosu</small></footer>
<dialog #booking (close)="selected.set(null)"><button class="close" aria-label="Pencereyi kapat" (click)="close()">×</button>@if(selected();as motor){<div class="eyebrow">YOLCULUK ÖZETİN</div><h2>{{motor.name}}</h2><motor-art [color]="motor.color"/><dl><div><dt>Teslim noktası</dt><dd>{{location}}</dd></div><div><dt>Alış / dönüş</dt><dd>{{start()}} / {{end()}}</dd></div><div><dt>Kiralama süresi</dt><dd>{{days()}} gün</dd></div><div class="total"><dt>Demo toplamı</dt><dd>{{motor.price*days() | currency:'TRY':'symbol':'1.0-0'}}</dd></div></dl><p class="modal-note">Örnek fiyatlandırmadır. Ödeme ya da kişisel bilgi istenmez.</p>@if(confirmed()){<div class="success" role="status">✓ Demo planın hazır! Gerçek rezervasyon oluşturulmadı.</div>}@else{<button class="button primary full" (click)="confirmed.set(true)">Demo planı oluştur ↗</button>}}</dialog>
`})
class App {
 today=dateAfter(0);year=new Date().getFullYear();location='Antalya Merkez';categories=['Tümü','Scooter','Naked','Adventure'];
 start=signal(dateAfter(1));end=signal(dateAfter(4));category=signal('Tümü');sort=signal('recommended');searched=signal(false);confirmed=signal(false);selected=signal<Motor|null>(null);
 booking=viewChild.required<ElementRef<HTMLDialogElement>>('booking');
 dateError=computed(()=>{if(!this.start()||!this.end())return 'Lütfen alış ve dönüş tarihlerini seç.';if(this.start()<this.today)return 'Alış tarihi geçmişte olamaz.';if(this.end()<=this.start())return 'Dönüş tarihi alış tarihinden sonra olmalı.';return '';});
 days=computed(()=>this.dateError()?0:Math.round((Date.parse(this.end())-Date.parse(this.start()))/86400000));
 motors=computed(()=>{const list=inventory.filter(m=>this.category()==='Tümü'||m.category===this.category());return this.sort()==='asc'?list.sort((a,b)=>a.price-b.price):this.sort()==='desc'?list.sort((a,b)=>b.price-a.price):list;});
 search(){if(this.dateError())return;this.searched.set(true);document.getElementById('fleet')?.scrollIntoView({behavior:'smooth'});}
 selectMotor(m:Motor){if(this.dateError()){document.querySelector('.search-panel')?.scrollIntoView({behavior:'smooth'});return;}this.selected.set(m);this.confirmed.set(false);this.booking().nativeElement.showModal();}
 close(){this.booking().nativeElement.close();}
}
bootstrapApplication(App, {providers:[{provide:LOCALE_ID,useValue:'tr-TR'}]}).catch(console.error);
