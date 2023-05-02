const products = [
  // cameras
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 79699,
    rating: 4,
    count: 360,
    url: "/images/cameras/alexander-andrews-sNPfZxrBYdQ-unsplash.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus facere amet provident, impedit voluptatum quisquam harum dicta nisi, illum, iste magni molestias quos praesentium ipsum suscipit autem. Quis suscipit deserunt eligendi cum non quae repellendus at impedit, unde culpa!",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 69599,
    rating: 5,
    count: 450,
    url: "/images/cameras/annie-spratt-tKla6vT466U-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores numquam natus obcaecati quis deleniti asperiores, quo ullam ipsum eaque labore sint est incidunt nam esse ab, aut eligendi dolore consequuntur fuga. Necessitatibus, distinctio et dolores labore odio sunt provident harum.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 64999,
    rating: 3.2,
    count: 129,
    url: "/images/cameras/bart-van-dijk-swxPxjxHNkc-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet vero in id praesentium, ut officiis et sapiente voluptatibus quis ullam voluptates reiciendis beatae similique eius repellat tenetur voluptatum dolorem, neque quod odio iure ratione doloremque suscipit. Earum, voluptatibus. Nisi neque atque dolore sapiente fuga quisquam ipsam repudiandae ab molestiae!",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 77999,
    rating: 4.2,
    count: 67,
    url: "/images/cameras/chris-lawton-xn2RNgEpeao-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur doloribus quam totam similique debitis suscipit deserunt et perferendis, commodi libero inventore. Recusandae nam voluptate sequi ea vitae quibusdam nihil vero? Et eaque labore, voluptas quae quis obcaecati, laborum qui id cum ipsum, laudantium quasi.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 67999,
    rating: 4.2,
    count: 76,
    url: "/images/cameras/julius-drost-8kslEghjQ0c-unsplash.jpg",
    description:
      "Asymmetrical post-ironic XOXO, blue bottle enamel pin big mood jianbing. Locavore everyday carry flannel organic flexitarian VHS actually lyft bushwick hammock messenger bag 3 wolf moon direct trade echo park. Viral semiotics raw denim tousled, stumptown squid beard gorpcore hella selfies wayfarers 90's sus knausgaard. Ramps copper mug readymade vexillologist put a bird on it YOLO, you probably haven't heard of them kitsch waistcoat biodiesel dreamcatcher cornhole. Chartreuse cornhole brunch ennui, microdosing kinfolk seitan banjo pork belly tumblr subway tile JOMO yuccie. Succulents godard chillwave biodiesel air plant. Bruh tonx meggings lo-fi church-key glossier JOMO lumbersexual keffiyeh jean shorts viral messenger bag organic tote bag.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 22999,
    rating: 3.6,
    count: 65,
    url: "/images/cameras/justin-lim-6eq6OFueloM-unsplash.jpg",
    description:
      "Asymmetrical post-ironic XOXO, blue bottle enamel pin big mood jianbing. Locavore everyday carry flannel organic flexitarian VHS actually lyft bushwick hammock messenger bag 3 wolf moon direct trade echo park. Viral semiotics raw denim tousled, stumptown squid beard gorpcore hella selfies wayfarers 90's sus knausgaard. Ramps copper mug readymade vexillologist put a bird on it YOLO, you probably haven't heard of them kitsch waistcoat biodiesel dreamcatcher cornhole. Chartreuse cornhole brunch ennui, microdosing kinfolk seitan banjo pork belly tumblr subway tile JOMO yuccie. Succulents godard chillwave biodiesel air plant. Bruh tonx meggings lo-fi church-key glossier JOMO lumbersexual keffiyeh jean shorts viral messenger bag organic tote bag.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 67999,
    rating: 4,
    count: 56,
    url: "/images/cameras/pexels-atc-comm-photo-952264.jpg",
    description:
      "Direct trade helvetica hot chicken ennui XOXO sartorial. Tonx snackwave shabby chic, polaroid post-ironic grailed fixie. Tattooed roof party marfa disrupt, hashtag grailed messenger bag pug heirloom. Kitsch fam thundercats blog glossier williamsburg beard DSA photo booth. 90's food truck wayfarers hoodie. Pour-over sustainable JOMO glossier, XOXO narwhal farm-to-table small batch tote bag ennui sus. Authentic single-origin coffee retro tbh bitters small batch squid blue bottle keytar pinterest chillwave shabby chic.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 62999,
    rating: 5,
    count: 34,
    url: "/images/cameras/pexels-hemakumar-j-10346738.jpg",
    description:
      "Pinterest 3 wolf moon wayfarers, salvia organic viral sustainable. Enamel pin migas succulents, VHS tousled selvage cloud bread la croix vexillologist. Beard knausgaard crucifix live-edge, pork belly portland flexitarian scenester. Scenester mlkshk bruh, chillwave raw denim kogi cronut hella 8-bit JOMO authentic flexitarian bespoke seitan.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 34999,
    rating: 3.9,
    count: 64,
    url: "/images/cameras/pexels-luis-quintero-1787234.jpg",
    description:
      "Meggings try-hard master cleanse kombucha selvage. Jianbing cred austin put a bird on it fixie echo park forage retro chicharrones. Marfa ethical adaptogen poke, tilde 3 wolf moon activated charcoal prism heirloom unicorn mukbang poutine cloud bread. Adaptogen organic marfa, pour-over Brooklyn tousled mukbang forage gentrify tbh yes plz live-edge blue bottle shaman migas.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 78499,
    rating: 5,
    count: 150,
    url: "/images/cameras/pexels-luis-quintero-1787235.jpg",
    description:
      "Vinyl everyday carry hashtag same activated charcoal heirloom, squid marfa mumblecore franzen post-ironic selfies viral. Street art taiyaki adaptogen, pitchfork knausgaard bushwick vibecession pork belly stumptown shabby chic 3 wolf moon. Distillery cupping DIY hell of gorpcore pour-over. Small batch pabst meditation pork belly normcore tattooed flexitarian kogi kitsch austin neutra. Air plant DSA vinyl af, kombucha waistcoat VHS authentic small batch jianbing.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 68999,
    rating: 4.2,
    count: 68,
    url: "/images/cameras/pexels-matej-614077.jpg",
    description:
      "Artisan jawn locavore vibecession gochujang try-hard fit cliche echo park fashion axe pour-over schlitz selfies jean shorts air plant. Asymmetrical etsy mumblecore, DSA distillery before they sold out cronut narwhal authentic vape hell of godard PBR&B. Keffiyeh art party semiotics cred austin hammock prism neutra paleo bushwick +1 sriracha. Kogi mumblecore tonx, blackbird spyplane migas drinking vinegar truffaut squid banh mi selfies actually. Raclette try-hard lyft leggings gatekeep. Edison bulb banh mi tofu tousled polaroid 8-bit hashtag blackbird spyplane enamel pin adaptogen. Keytar mukbang jianbing DIY yes plz bushwick kinfolk gochujang next level shoreditch williamsburg salvia mixtape.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 84999,
    rating: 3.5,
    count: 34,
    url: "/images/cameras/pexels-matheus-bertelli-1144699.jpg",
    description:
      "Brooklyn taxidermy aesthetic, woke church-key tote bag single-origin coffee VHS butcher cornhole try-hard intelligentsia selfies fashion axe master cleanse. Copper mug vexillologist yr PBR&B, grailed dreamcatcher seitan fit blackbird spyplane ramps paleo flannel keytar raw denim swag. Poutine lo-fi mukbang, blue bottle franzen everyday carry small batch stumptown tumblr lumbersexual deep v humblebrag master cleanse meh aesthetic. Man braid jianbing cupping distillery lo-fi hexagon. Humblebrag tattooed celiac organic, wolf knausgaard grailed flannel.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 69999,
    rating: 4,
    count: 89,
    url: "/images/cameras/pexels-photomix-company-212372.jpg",
    description:
      "Fashion axe kinfolk kitsch gochujang actually hell of, locavore adaptogen taxidermy 90's. Pinterest JOMO disrupt grailed taxidermy squid sustainable activated charcoal blackbird spyplane freegan glossier. Same fanny pack food truck biodiesel, banjo wolf venmo hexagon. VHS asymmetrical cold-pressed prism chambray DSA migas vice gentrify tacos snackwave selfies intelligentsia biodiesel. Yuccie chartreuse snackwave pinterest, grailed chambray beard put a bird on it aesthetic tacos hexagon hammock. Distillery succulents farm-to-table drinking vinegar, humblebrag stumptown chartreuse hot chicken normcore listicle swag cray. Quinoa cupping direct trade sus pork belly.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 58999,
    rating: 4.5,
    count: 87,
    url: "/images/cameras/pexels-pixabay-51383.jpg",
    description:
      "Banjo portland adaptogen cardigan, marxism skateboard vexillologist helvetica vaporware tacos echo park try-hard. Unicorn sartorial wolf praxis truffaut YOLO hella polaroid portland helvetica listicle slow-carb butcher. Biodiesel mlkshk plaid affogato kogi selfies migas af vibecession, fam direct trade photo booth heirloom kombucha. Craft beer brunch everyday carry, fanny pack gatekeep 8-bit pug leggings blog jianbing trust fund disrupt fingerstache. Photo booth authentic irony jawn, occupy af distillery williamsburg. Hexagon sustainable microdosing dreamcatcher post-ironic. Unicorn viral sartorial beard.",
  },
  {
    name: "Camera LMN",
    categories: "electronics camera",
    price: 89999,
    rating: 3.6,
    count: 78,
    url: "/images/cameras/pexels-ómkãr-ñaídu-3552187.jpg",
    description:
      "Pinterest 3 wolf moon wayfarers, salvia organic viral sustainable. Enamel pin migas succulents, VHS tousled selvage cloud bread la croix vexillologist. Beard knausgaard crucifix live-edge, pork belly portland flexitarian scenester. Scenester mlkshk bruh, chillwave raw denim kogi cronut hella 8-bit JOMO authentic flexitarian bespoke seitan",
  },

  // electronics
  {
    name: "Laptop XYZ",
    categories: "electronics laptops",
    price: 24999,
    rating: 4,
    count: 67,
    url: "/images/electronics/ales-nesetril-Im7lZjxeLhg-unsplash.jpg",
    description:
      "I'm baby polaroid migas hoodie, artisan poke yuccie flannel butcher whatever quinoa PBR&B master cleanse iceland. Ramps pork belly small batch, vaporware intelligentsia yr meggings. Vibecession celiac shabby chic sriracha, retro authentic put a bird on it. Hell of bespoke schlitz, lumbersexual drinking vinegar vexillologist polaroid ethical tumblr shaman. Fit same tofu, vibecession humblebrag lyft hell of cornhole grailed master cleanse YOLO vexillologist gastropub. Kitsch beard seitan hot chicken gatekeep gentrify cronut intelligentsia Brooklyn. Yuccie mlkshk chia prism ugh, messenger bag solarpunk tumblr JOMO put a bird on it blog.",
  },
  {
    name: "Wrist watch BDZ",
    categories: "electronics wrist watches",
    price: 34999,
    rating: 3.4,
    count: 95,
    url: "/images/electronics/alex-azabache-fgCnYUwK_E8-unsplash.jpg",
    description:
      "Bodega boys humblebrag tonx adaptogen. Viral hella vibecession vaporware. You probably haven't heard of them coloring book gluten-free, bruh iPhone skateboard pabst ascot swag lyft pinterest same migas. Ugh mukbang man bun kickstarter disrupt 3 wolf moon flannel woke hoodie same. Tumblr chambray sus thundercats shabby chic intelligentsia semiotics tote bag cardigan art party air plant four loko roof party listicle tattooed.",
  },
  {
    name: "Wrist watch XYZ",
    categories: "electronics wrist watches",
    price: 44999,
    rating: 4.6,
    count: 85,
    url: "/images/electronics/bence-balla-schottner-_HAVhi9B2a4-unsplash.jpg",
    description:
      "Hammock mixtape lumbersexual, copper mug marxism williamsburg ethical +1 ennui hexagon artisan hell of. Vape iPhone same marxism biodiesel, waistcoat sriracha. Jean shorts tbh tousled, semiotics hammock jianbing pickled poutine same glossier succulents bushwick aesthetic. Heirloom 3 wolf moon vegan, vibecession ascot selvage sus selfies. Etsy bodega boys gluten-free, twee adaptogen normcore leggings meggings PBR&B celiac praxis wolf shaman master cleanse gatekeep. Succulents stumptown dreamcatcher distillery, austin lyft franzen twee. Yr fingerstache 3 wolf moon, pok pok tumblr snackwave gatekeep hell of you probably haven't heard of them wolf celiac la croix taxidermy tilde.",
  },
  {
    name: "Laptop XYZ",
    categories: "electronics laptops",
    price: 34999,
    rating: 3.2,
    count: 58,
    url: "/images/electronics/bram-van-oost-ho3fDnfcKz8-unsplash.jpg",
    description:
      "Blue bottle man braid bruh kombucha franzen street art semiotics. Grailed selfies enamel pin, iceland scenester pabst irony jean shorts. Wolf direct trade artisan shoreditch next level +1 lomo gentrify meggings sriracha XOXO banjo forage narwhal lo-fi. Quinoa gochujang Brooklyn next level locavore pug. Kinfolk adaptogen bicycle rights, small batch slow-carb butcher banh mi live-edge humblebrag. Sustainable four loko tacos vape. Gatekeep tofu farm-to-table neutra fashion axe quinoa neutral milk hotel live-edge lumbersexual leggings stumptown knausgaard.",
  },
  {
    name: "Wrist watch XYZ",
    categories: "electronics wrist watches",
    price: 43999,
    rating: 4,
    count: 53,
    url: "/images/electronics/bryan-angelo-UpPxP5eBxoQ-unsplash.jpg",
    description:
      "Lumbersexual squid fanny pack wolf hoodie chillwave YOLO you probably haven't heard of them pour-over cloud bread gastropub. Whatever hot chicken lyft big mood intelligentsia ramps same butcher adaptogen asymmetrical vaporware try-hard quinoa readymade unicorn. Ethical neutra af 3 wolf moon. Hammock ugh bicycle rights iceland, meggings messenger bag grailed mlkshk same flexitarian tonx truffaut shoreditch seitan vice. Stumptown big mood salvia deep v kale chips yr vegan tofu waistcoat truffaut meditation. Kombucha mlkshk hammock schlitz sartorial keffiyeh. Health goth photo booth heirloom vape, pinterest wayfarers chambray portland enamel pin everyday carry locavore.",
  },
  {
    name: "HTC Mobile phone",
    categories: "electronics htc mobile phones",
    price: 36999,
    rating: 3,
    count: 43,
    url: "/images/electronics/c-d-x-hKTN9zl30eE-unsplash.jpg",
    description:
      "YOLO vinyl +1 lumbersexual enamel pin copper mug next level pabst affogato XOXO. Put a bird on it iPhone grailed edison bulb meggings knausgaard pabst migas skateboard lomo letterpress JOMO tousled same. Vibecession etsy activated charcoal, man bun craft beer tbh gluten-free ennui four dollar toast ramps lomo Brooklyn. Vibecession gatekeep fingerstache, fit chia bodega boys whatever activated charcoal before they sold out cronut irony. Next level live-edge asymmetrical ramps blue bottle. Synth bushwick helvetica, kombucha artisan bitters chartreuse tousled poutine mukbang ennui adaptogen VHS.",
  },
  {
    name: "Headphone",
    categories: "electronics headphones",
    price: 53999,
    rating: 3.5,
    count: 65,
    url: "/images/electronics/c-d-x-PDX_a_82obo-unsplash.jpg",
    description:
      "YOLO glossier twee mumblecore pok pok aesthetic +1. 8-bit hammock lo-fi chicharrones franzen subway tile. Bespoke affogato swag fit narwhal poutine retro marfa. Keffiyeh forage cliche blue bottle, adaptogen disrupt shoreditch master cleanse retro try-hard mukbang food truck pinterest. Banjo cronut banh mi offal fixie big mood jean shorts, pork belly cloud bread enamel pin hammock jianbing YOLO copper mug. Gochujang taiyaki same paleo viral whatever. Listicle praxis before they sold out gentrify tattooed artisan, unicorn try-hard blog.",
  },
  {
    name: "Mobile phone RTY",
    categories: "electronics mobile phones",
    price: 34999,
    rating: 3.4,
    count: 57,
    url: "/images/electronics/d-c-tr-nh-1t1CBECuqvs-unsplash.jpg",
    description:
      "Polaroid church-key tilde letterpress swag coloring book raclette fam authentic small batch stumptown. Ennui jawn art party tilde kogi kitsch. Kickstarter affogato tote bag, salvia hoodie gorpcore jawn cray bespoke organic. Edison bulb praxis mlkshk, tattooed glossier venmo typewriter gochujang same cupping. Tonx gastropub trust fund austin, mlkshk bodega boys copper mug tote bag messenger bag intelligentsia banh mi bespoke. Retro marfa brunch, lyft gatekeep before they sold out ramps fashion axe cray biodiesel kitsch prism scenester. Biodiesel prism JOMO master cleanse, small batch butcher health goth venmo subway tile cred DIY messenger bag before they sold out.",
  },
  {
    name: '27" Monitor',
    categories: "electronics monitors",
    price: 59864,
    rating: 5,
    count: 85,
    url: "/images/electronics/daniel-korpai-iopITwyUcTA-unsplash.jpg",
    description:
      "Enamel pin XOXO flexitarian schlitz big mood. Umami fixie ascot irony selvage stumptown man bun, fit bespoke vape lomo hella tumeric. 90's slow-carb Brooklyn succulents swag yes plz vinyl coloring book single-origin coffee pok pok schlitz. Hoodie bushwick af, taxidermy vice ennui migas PBR&B. Affogato health goth tattooed pour-over vibecession cliche, tumblr pabst tilde. Offal single-origin coffee neutral milk hotel, vape unicorn shoreditch yuccie lyft ethical dreamcatcher ascot mixtape pitchfork. Farm-to-table pabst wolf banjo tote bag humblebrag four dollar toast tonx pop-up whatever distillery hexagon.",
  },
  {
    name: '10.1" Mobile tablet',
    categories: "electronics mobile phones mobile tablets",
    price: 44986,
    rating: 3.4,
    count: 72,
    url: "/images/electronics/daniel-romero--cCxgKIA5RA-unsplash.jpg",
    description:
      "Cupping ramps bicycle rights 90's YOLO solarpunk hammock artisan butcher lyft. Glossier craft beer skateboard irony heirloom echo park gastropub bushwick green juice, hammock food truck viral. XOXO lomo Brooklyn, beard messenger bag stumptown pork belly lo-fi selvage hell of pitchfork JOMO viral hammock. Solarpunk art party roof party pitchfork af bitters hella wayfarers street art tbh woke banh mi migas. Slow-carb small batch ennui skateboard actually. Next level marfa kickstarter keffiyeh lomo.",
  },
  {
    name: "IPhone 12",
    categories: "electronics mobile phones apple phones",
    price: 59864,
    rating: 5,
    count: 83,
    url: "/images/electronics/daniel-romero-95xVTuEL4Jg-unsplash.jpg",
    description:
      "Pabst solarpunk adaptogen, biodiesel eu sunt celiac af veniam sint fugiat woke. Hashtag yes plz gochujang, pickled gastropub gorpcore do veniam post-ironic celiac quis. Humblebrag bitters tote bag, health goth disrupt sriracha literally synth minim. Qui shaman praxis, hella sus pabst ut salvia XOXO umami blue bottle raw denim freegan id keytar. Swag farm-to-table magna disrupt hoodie waistcoat praxis ut vinyl gentrify snackwave cliche. Narwhal dreamcatcher humblebrag yr.",
  },
  {
    name: "Mobile tablet with keyboard",
    categories: "electronics mobile phones mobile tablets",
    price: 36978,
    rating: 3.5,
    count: 97,
    url: "/images/electronics/daniel-romero-Z4_kN9ybLf4-unsplash.jpg",
    description:
      "Neutral milk hotel man bun woke, bespoke meggings commodo aesthetic roof party +1 air plant hot chicken minim. Thundercats literally poutine blackbird spyplane, consectetur viral mukbang vice echo park voluptate air plant unicorn ut. Schlitz reprehenderit hammock cupidatat chillwave, biodiesel meggings kitsch incididunt seitan enim Brooklyn actually venmo. Praxis kickstarter next level, butcher in yuccie palo santo mukbang 90's cray est minim occupy.",
  },
  {
    name: '24" Monitor',
    categories: "electronics monitors",
    price: 34999,
    rating: 3.4,
    count: 245,
    url: "/images/electronics/dhru-j-1Ksz0Q1NU3k-unsplash.jpg",
    description:
      "Pug anim poutine, green juice authentic sustainable try-hard eu seitan microdosing solarpunk. Coloring book microdosing copper mug fit Brooklyn. Try-hard twee meh, tumeric you probably haven't heard of them celiac velit asymmetrical est disrupt. Street art blog in incididunt af. Ethical master cleanse next level williamsburg in.",
  },
  {
    name: "Dell Laptop",
    categories: "electronics laptops",
    price: 24987,
    rating: 5,
    count: 49,
    url: "/images/electronics/erick-cerritos-i5UV2HpITYA-unsplash.jpg",
    description:
      "+1 drinking vinegar swag, truffaut freegan ex tbh ea man braid gatekeep. Qui organic waistcoat franzen elit mustache kombucha gastropub before they sold out craft beer irure kitsch aliqua. Single-origin coffee tilde four dollar toast flexitarian paleo succulents minim jean shorts chillwave. Cornhole green juice ad art party, literally hoodie umami +1 glossier incididunt gatekeep skateboard seitan elit. Crucifix irony do, tote bag semiotics pariatur occaecat banjo cardigan pug meditation ramps deserunt umami gorpcore. Deep v gorpcore ethical forage 90's non palo santo tumeric before they sold out gatekeep air plant roof party paleo.",
  },
  {
    name: "Headphone",
    categories: "electronics headphones",
    price: 4486,
    rating: 3.4,
    count: 45,
    url: "/images/electronics/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
    description:
      "Marfa biodiesel heirloom aliqua fixie, celiac cronut air plant mollit aute 3 wolf moon excepteur XOXO swag occaecat. XOXO keytar excepteur mlkshk, aliquip woke pariatur et polaroid cray. Banjo sint keytar pitchfork activated charcoal enamel pin. Ullamco copper mug yuccie wayfarers 8-bit, banjo sriracha commodo. Fashion axe prism gastropub, wayfarers et normcore neutra aliqua gluten-free dolor. Air plant gatekeep ramps, af dolore hammock vape esse aute affogato thundercats kitsch.",
  },
  {
    name: "Onboard laptop keyboard",
    categories: "electronics laptops keyboards",
    price: 3678,
    rating: 5,
    count: 147,
    url: "/images/electronics/hal-gatewood-Pr578ZCufII-unsplash.jpg",
    description:
      "Adaptogen ramps pitchfork dolor. Voluptate pickled chartreuse snackwave knausgaard sustainable stumptown deserunt. Sriracha jianbing man braid, pinterest lumbersexual dolore proident ex subway tile pickled ascot heirloom glossier. Single-origin coffee tattooed salvia excepteur, iPhone vape id four loko sartorial. Next level intelligentsia magna cronut ut duis truffaut dolor vinyl selfies forage four dollar toast chartreuse austin. Gentrify duis fam subway tile DIY banjo.",
  },
  {
    name: "Headphone",
    categories: "electronics headphones",
    price: 1864,
    rating: 3.6,
    count: 48,
    url: "/images/electronics/icons8-team-7LNatQYMzm4-unsplash.jpg",
    description:
      "Fugiat kogi vice laboris, four loko listicle asymmetrical YOLO artisan af aliquip tumeric fam helvetica. Disrupt kale chips scenester selfies hexagon freegan waistcoat skateboard heirloom bruh. Officia roof party forage fit cardigan blog laboris chillwave YOLO organic coloring book ullamco ad bushwick helvetica. Food truck ea affogato single-origin coffee. Cronut kale chips cray bitters qui air plant. Eiusmod forage jawn, blog pabst in salvia.",
  },
  {
    name: "Wrist watch ABC",
    categories: "electronics wrist watches",
    price: 44986,
    rating: 3.4,
    count: 145,
    url: "/images/electronics/isabel-garza-wQbHY0M-YOk-unsplash.jpg",
    description:
      "Grailed jawn consectetur marxism authentic, tonx irure kombucha raw denim craft beer nisi meh adipisicing. Blue bottle tousled post-ironic, esse tbh incididunt lorem plaid poke 8-bit. Neutral milk hotel labore tbh, in freegan knausgaard occupy consectetur gluten-free cillum. Health goth ullamco etsy, gochujang edison bulb in celiac microdosing mollit DSA. Bruh mukbang four dollar toast fanny pack taxidermy, laborum hot chicken. Narwhal incididunt cardigan, brunch chillwave kombucha you probably haven't heard of them ugh non meggings. Lomo YOLO normcore, shaman ut blog ascot fanny pack vice raw denim 8-bit big mood.",
  },
  {
    name: "Macbook HUG",
    categories: "electronics laptops",
    price: 34999,
    rating: 5,
    count: 43,
    url: "/images/electronics/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg",
    description:
      "Chia VHS sunt small batch, stumptown mixtape solarpunk cred aute poutine forage ut vegan. Chia tacos scenester pickled. Actually jawn green juice, ascot gluten-free tilde officia chia normcore biodiesel exercitation selfies before they sold out keytar. Sartorial aute est lorem non narwhal. Pariatur tote bag fingerstache ut, jianbing aliquip 90's poke. Consectetur kogi non, woke kickstarter gentrify enamel pin kombucha.",
  },
  {
    name: "Macbook SML",
    categories: "electronics laptops",
    price: 44986,
    rating: 3.5,
    count: 65,
    url: "/images/electronics/kari-shea-1SAnrIxw5OY-unsplash.jpg",
    description:
      "Bruh coloring book hashtag keytar. Ea bicycle rights nisi venmo. Ea street art pabst ullamco intelligentsia umami lumbersexual est pour-over fam bushwick gastropub magna. Veniam ramps narwhal taxidermy whatever mukbang chartreuse try-hard pug mixtape literally sunt seitan.",
  },
  {
    name: "Muff Headphone",
    categories: "electronics headphones",
    price: 59864,
    rating: 3.4,
    count: 96,
    url: "/images/electronics/kiran-ck-LSNJ-pltdu8-unsplash.jpg",
    description:
      "Man bun jean shorts Brooklyn, craft beer gastropub mukbang shaman gochujang narwhal. Twee retro gastropub, disrupt bitters kickstarter wayfarers cornhole meh flexitarian crucifix vice heirloom. Affogato poutine pabst hexagon bodega boys. Poutine man bun roof party viral. Taxidermy shabby chic +1 affogato disrupt letterpress sriracha iceland.",
  },
  {
    name: '27" Monitor',
    categories: "electronics monitors",
    price: 36978,
    rating: 5,
    count: 56,
    url: "/images/electronics/kitai-zhvaeh-R9rA-unsplash.jpg",
    description:
      "Pop-up wolf humblebrag blog deep v cred. Offal banjo gluten-free cliche raclette XOXO pitchfork. Migas retro vaporware gentrify, glossier neutral milk hotel messenger bag vibecession. Keffiyeh kitsch ugh wayfarers man bun affogato kogi, fashion axe pickled same tattooed raclette ramps yuccie kickstarter. Normcore you probably haven't heard of them adaptogen art party biodiesel praxis, meh leggings 90's. Photo booth VHS crucifix, keffiyeh normcore iceland literally lumbersexual bruh next level twee everyday carry art party ennui. Twee street art vaporware tote bag try-hard disrupt tacos intelligentsia williamsburg scenester fashion axe godard.",
  },
  {
    name: "IPad",
    categories: "electronics mobile phones apple phones ipad",
    price: 44986,
    rating: 3.6,
    count: 98,
    url: "/images/electronics/lauren-mancke-qc3sE5lGLbA-unsplash.jpg",
    description:
      "Cliche air plant raw denim etsy VHS edison bulb green juice post-ironic wayfarers intelligentsia neutra XOXO polaroid. Artisan sus taiyaki, cold-pressed ennui man braid lo-fi. Hella hexagon bicycle rights fashion axe you probably haven't heard of them jean shorts. Try-hard health goth marxism gochujang. Etsy pok pok same, leggings cloud bread cred chillwave seitan squid portland cold-pressed migas.",
  },
  {
    name: "Wrist watch",
    categories: "electronics wrist watches",
    price: 59864,
    rating: 5,
    count: 156,
    url: "/images/electronics/lightscape-YBR08SwBp24-unsplash.jpg",
    description:
      "Salvia pop-up tbh church-key DIY hella. Meh mumblecore pour-over post-ironic austin, green juice meggings PBR&B. Bespoke keytar church-key portland disrupt glossier shaman tote bag bruh enamel pin godard. Pok pok truffaut poke kitsch ugh. Dreamcatcher chartreuse squid palo santo helvetica woke church-key put a bird on it pitchfork. Bicycle rights ascot vaporware craft beer, kombucha prism photo booth same subway tile. Flannel sriracha jianbing shoreditch, aesthetic lo-fi gochujang.",
  },
  {
    name: "name of item",
    categories: "electronics monitors",
    price: 34999,
    rating: 2.3,
    count: 64,
    url: "/images/electronics/linus-mimietz-gvptKmonylk-unsplash.jpg",
    description:
      "Solarpunk keffiyeh hell of, freegan pork belly microdosing copper mug gluten-free aesthetic. Vice health goth mukbang venmo 3 wolf moon, trust fund Brooklyn cardigan selvage actually gatekeep meditation shabby chic distillery. Butcher health goth cardigan raw denim freegan kombucha, bespoke grailed post-ironic iPhone echo park enamel pin tilde listicle pok pok. Sustainable portland fashion axe pour-over neutral milk hotel taiyaki cardigan jianbing lyft tote bag selfies banjo salvia palo santo. Coloring book distillery YOLO microdosing, disrupt Brooklyn shoreditch raclette jawn helvetica freegan iPhone artisan semiotics. Sustainable four loko sus vape ennui organic coloring book pitchfork jean shorts glossier. Meditation kinfolk trust fund VHS.",
  },
  {
    name: "name of item",
    categories: "electronics wrist watches",
    price: 36978,
    rating: 5,
    count: 90,
    url: "/images/electronics/logan-weaver-lgnwvr-jM_xJyX-sPI-unsplash.jpg",
    description:
      "PBR&B ramps semiotics vice cupping synth. Salvia marfa woke +1 gastropub tacos praxis echo park literally blog paleo roof party lumbersexual. Normcore la croix blue bottle, leggings drinking vinegar flannel gentrify. Tofu blue bottle tumblr cloud bread distillery gluten-free mlkshk bitters. Big mood meditation brunch tousled post-ironic neutral milk hotel authentic you probably haven't heard of them tumeric green juice art party. Semiotics mixtape try-hard seitan truffaut palo santo wolf celiac tote bag cronut.",
  },
  {
    name: "name of item",
    categories: "electronics headphones",
    price: 44986,
    rating: 2.3,
    count: 35,
    url: "/images/electronics/nejc-soklic-tgoxr5Uu9kA-unsplash.jpg",
    description:
      "Jean shorts portland drinking vinegar mumblecore selfies gastropub yr activated charcoal waistcoat authentic dreamcatcher vexillologist meh skateboard blue bottle. Bitters blue bottle tumblr umami craft beer, irony gorpcore neutra vinyl tacos. Selvage Brooklyn echo park, you probably haven't heard of them raw denim narwhal sriracha cloud bread pug mustache polaroid hammock humblebrag portland ascot. Brooklyn truffaut occupy pickled.",
  },
  {
    name: "name of item",
    categories: "electronics monitors",
    price: 36978,
    rating: 3.6,
    count: 90,
    url: "/images/electronics/niclas-illg-zEBqF_E2FIY-unsplash.jpg",
    description:
      "Gentrify DIY succulents man bun, jawn solarpunk blue bottle sartorial tacos ugh vape bicycle rights. Celiac coloring book sartorial, sus truffaut tumblr flannel pug. Shaman leggings street art, freegan prism hella cardigan humblebrag seitan air plant disrupt kogi. Poutine waistcoat typewriter tattooed ascot four dollar toast lo-fi live-edge you probably haven't heard of them fashion axe deep v food truck tbh tumeric. Poke tacos retro gentrify gastropub. Poke trust fund hexagon lumbersexual. Poke portland kombucha same pok pok.",
  },
  {
    name: "name of item",
    categories: "electronics wrist watches",
    price: 24987,
    rating: 5,
    count: 86,
    url: "/images/electronics/olga-nayda-dB3pkARCxHI-unsplash.jpg",
    description:
      "Forage pork belly cronut synth woke fingerstache. Keffiyeh kitsch skateboard, ugh lumbersexual authentic ethical shoreditch brunch. Dreamcatcher intelligentsia organic microdosing normcore yr mustache echo park subway tile forage neutral milk hotel hoodie pop-up williamsburg tofu. Single-origin coffee farm-to-table lumbersexual waistcoat street art, chambray actually stumptown cronut distillery beard aesthetic blog everyday carry shoreditch.",
  },
  {
    name: "name of item",
    categories: "electronics mobile phones mobile tablets",
    price: 36978,
    rating: 2.3,
    count: 201,
    url: "/images/electronics/onur-binay--WJQYRbgRLk-unsplash.jpg",
    description:
      "Woke migas retro pinterest jawn bespoke paleo subway tile blackbird spyplane mlkshk fashion axe jean shorts cray snackwave. Brunch etsy flannel, venmo intelligentsia letterpress trust fund man braid art party aesthetic tumeric tattooed. DSA pug Brooklyn mixtape, cupping master cleanse etsy four dollar toast banh mi. Bodega boys trust fund godard, pour-over pitchfork small batch iceland shoreditch tousled food truck unicorn. Cardigan listicle bespoke mixtape mustache echo park. Grailed pabst you probably haven't heard of them, adaptogen cardigan gochujang enamel pin waistcoat leggings wolf hammock readymade pug vegan.",
  },
  {
    name: "Samsung Fold",
    categories: "electronics mobile phones samsung fold",
    price: 34999,
    rating: 4,
    count: 65,
    url: "/images/electronics/onur-binay-sPxk3zxpQ08-unsplash.jpg",
    description:
      "Cray chambray truffaut, 8-bit lomo 3 wolf moon migas mlkshk big mood activated charcoal chicharrones gentrify neutral milk hotel. Vibecession solarpunk hoodie franzen four dollar toast. Cronut artisan synth paleo yr, sartorial snackwave single-origin coffee slow-carb etsy narwhal swag thundercats listicle. Hammock raclette lo-fi, chillwave lomo subway tile +1 solarpunk woke photo booth humblebrag pitchfork flannel. Schlitz pinterest sus vexillologist tofu, distillery tumblr kitsch enamel pin la croix. Selvage chicharrones kickstarter whatever sus hell of food truck fam green juice subway tile dreamcatcher. Vaporware tbh plaid, grailed beard solarpunk etsy pinterest.",
  },
  {
    name: "name of item",
    categories: "electronics wrist watches",
    price: 44986,
    rating: 4.6,
    count: 87,
    url: "/images/electronics/pat-taylor-12V36G17IbQ-unsplash.jpg",
    description:
      "Tote bag vaporware ennui trust fund synth tonx hammock photo booth truffaut. Yr hell of +1, roof party tote bag subway tile fingerstache craft beer. Tonx health goth polaroid fanny pack venmo, pabst green juice iPhone fashion axe. Paleo whatever cloud bread, snackwave cupping sus affogato tbh live-edge crucifix lumbersexual hexagon. Messenger bag marfa asymmetrical health goth.",
  },
  {
    name: '24" Apple Monitor',
    categories: "electronics apple monitors",
    price: 24987,
    rating: 3.5,
    count: 95,
    url: "/images/electronics/quaritsch-photography-m2zuB8DqwyM-unsplash.jpg",
    description:
      "Put a bird on it kickstarter +1 synth pok pok shoreditch brunch activated charcoal shabby chic chillwave hella gatekeep. Cold-pressed poke art party bushwick church-key retro. Organic letterpress truffaut shaman blue bottle palo santo lomo. Photo booth art party shaman, letterpress cupping tattooed +1 hot chicken jawn salvia hashtag actually. Sriracha beard literally dreamcatcher crucifix vaporware biodiesel wolf, try-hard meggings neutral milk hotel mixtape master cleanse normcore subway tile.",
  },
  {
    name: "Mobile phone",
    categories: "electronics phones",
    price: 36978,
    rating: 4,
    count: 46,
    url: "/images/electronics/rishabh-malhotra-83ypHTv6J2M-unsplash.jpg",
    description:
      "Viral williamsburg chambray hashtag asymmetrical, copper mug kale chips tattooed sus literally post-ironic 90's cold-pressed four loko trust fund. Bodega boys man bun sartorial poutine. Tonx banjo woke, typewriter actually franzen waistcoat tote bag leggings palo santo adaptogen tofu williamsburg chicharrones cornhole. Cred adaptogen vape, occupy trust fund migas artisan meggings sustainable af blog pork belly Brooklyn church-key. Af truffaut affogato PBR&B selvage swag. Gentrify ennui tumblr tbh neutral milk hotel roof party.",
  },
  {
    name: "Window laptop",
    categories: "electronics window laptops",
    price: 44986,
    rating: 3.5,
    count: 87,
    url: "/images/electronics/surface-gNlvxxs4ehQ-unsplash.jpg",
    description:
      "Normcore williamsburg bespoke selvage, intelligentsia DSA chartreuse blackbird spyplane knausgaard. Whatever four dollar toast gorpcore green juice, slow-carb stumptown flannel health goth mustache tbh affogato scenester keffiyeh intelligentsia. Pork belly pitchfork readymade, beard +1 truffaut lumbersexual cloud bread. Big mood retro asymmetrical mixtape. Cardigan la croix yes plz pug shoreditch, venmo hella freegan wayfarers. Hella echo park selfies, vice succulents roof party neutral milk hotel everyday carry sartorial grailed pop-up normcore. Bespoke health goth kale chips locavore four loko pok pok waistcoat sriracha.",
  },
  {
    name: "Headphone",
    categories: "electronics headphones",
    price: 36978,
    rating: 5,
    count: 96,
    url: "/images/electronics/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg",
    description:
      "Butcher DSA selfies authentic gorpcore lo-fi praxis sus YOLO meggings pinterest austin chillwave godard synth. Portland succulents vegan kickstarter, disrupt slow-carb chambray post-ironic 90's paleo cray skateboard adaptogen lo-fi. Flannel humblebrag shoreditch, leggings selvage gatekeep 90's tbh blackbird spyplane cardigan chambray blog aesthetic swag. Big mood small batch same tote bag godard la croix lyft ascot wolf bodega boys swag unicorn.",
  },
  {
    name: "Apple Ipad",
    categories: "electronics mobile phones mobile tablets apple ipad",
    price: 34999,
    rating: 4,
    count: 194,
    url: "/images/electronics/xiong-yan-hs8ckhdPBkk-unsplash.jpg",
    description:
      "Scenester church-key normcore food truck tacos, cliche jianbing celiac occupy. Kale chips gochujang plaid 90's you probably haven't heard of them, snackwave slow-carb man braid organic. Narwhal austin 3 wolf moon, craft beer fixie celiac ascot copper mug before they sold out hot chicken next level beard chillwave poke. Drinking vinegar praxis roof party, celiac direct trade cliche 3 wolf moon. Gorpcore flexitarian williamsburg, aesthetic health goth Brooklyn coloring book iPhone. Photo booth air plant vinyl kinfolk.",
  },

  // men fashion
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 4799,
    rating: 4,
    count: 360,
    url: "/images/men-fashion/alex-haigh-fEt6Wd4t4j0-unsplash.jpg",
    description:
      "Vape offal salvia plaid distillery lo-fi neutra XOXO mustache pickled marfa street art same poke bitters. Enamel pin truffaut grailed raw denim helvetica, narwhal jean shorts dreamcatcher. Neutral milk hotel tilde mustache chia heirloom distillery. Vaporware 90's try-hard, iceland crucifix vexillologist tofu celiac squid mixtape sustainable kombucha.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3299,
    rating: 5,
    count: 450,
    url: "/images/men-fashion/bannon-morrissy-li2MZaE12BE-unsplash.jpg",
    description:
      "Meditation man bun solarpunk taiyaki drinking vinegar disrupt 8-bit. Pour-over thundercats kogi, squid yr venmo activated charcoal tumblr fashion axe tacos. Tbh beard affogato gentrify tofu gorpcore, raw denim edison bulb portland echo park butcher grailed cronut jawn chartreuse. 90's single-origin coffee shoreditch taxidermy austin shabby chic adaptogen marfa selfies bruh pabst artisan mukbang master cleanse. Affogato post-ironic aesthetic, poke twee pabst leggings solarpunk portland williamsburg yr sartorial JOMO gatekeep. Asymmetrical kogi aesthetic blackbird spyplane.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2899,
    rating: 3.2,
    count: 129,
    url: "/images/men-fashion/caio-coelho-NA9dtyWAFV4-unsplash.jpg",
    description:
      "Meditation vaporware quinoa bitters pok pok slow-carb grailed vibecession synth literally raw denim gochujang normcore post-ironic. Portland sus ugh mlkshk kogi bodega boys woke fingerstache. Pitchfork big mood put a bird on it cold-pressed deep v. Kale chips skateboard plaid grailed stumptown vape ennui small batch. Skateboard jianbing marxism artisan hammock salvia vaporware semiotics grailed PBR&B keffiyeh organic. Chia letterpress polaroid sus praxis chambray snackwave. Tumeric neutra disrupt unicorn put a bird on it iPhone.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3999,
    rating: 4.2,
    count: 67,
    url: "/images/men-fashion/caio-coelho-xFmXLq_KJxg-unsplash.jpg",
    description:
      "Swag chillwave raclette normcore gatekeep DIY. Cred offal actually typewriter synth kogi. Stumptown pok pok helvetica cloud bread fanny pack messenger bag jianbing. Wolf raw denim forage fingerstache schlitz DIY offal small batch craft beer slow-carb occupy chartreuse cliche.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2999,
    rating: 4.2,
    count: 76,
    url: "/images/men-fashion/faith-yarn-Wr0TpKqf26s-unsplash.jpg",
    description:
      "Locavore mustache gochujang pour-over narwhal cred. Flexitarian direct trade blog, chicharrones gluten-free sustainable kombucha cornhole offal skateboard fam wolf tumblr squid. Green juice street art whatever man bun jianbing tousled. YOLO chicharrones wayfarers, master cleanse tilde cliche etsy flannel vinyl palo santo listicle knausgaard distillery twee blackbird spyplane. Scenester schlitz gluten-free everyday carry, roof party meh disrupt leggings skateboard umami tumeric green juice. Blackbird spyplane four loko beard cornhole semiotics meh fanny pack locavore tacos vexillologist roof party artisan occupy.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 5499,
    rating: 3.6,
    count: 65,
    url: "/images/men-fashion/keagan-henman-xPJYL0l5Ii8-unsplash.jpg",
    description:
      "Salvia subway tile jawn you probably haven't heard of them try-hard tonx. Lo-fi vice polaroid, cupping roof party venmo tofu you probably haven't heard of them vape. Hashtag squid 3 wolf moon, thundercats cold-pressed tote bag YOLO hexagon. Migas cliche vice, edison bulb hexagon yes plz photo booth listicle distillery taxidermy kombucha. Pop-up semiotics same live-edge yes plz artisan, unicorn tumblr woke vegan post-ironic. Brooklyn coloring book put a bird on it, vibecession art party blog jianbing blue bottle PBR&B vice.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2499,
    rating: 4,
    count: 56,

    url: "/images/men-fashion/mario-klassen-t8yimzM2bEY-unsplash.jpg",
    description:
      "Scenester photo booth flexitarian street art ugh. Keytar VHS green juice prism, fam plaid next level tumeric chia tofu shaman. Listicle humblebrag hashtag blackbird spyplane portland polaroid. Pickled VHS affogato, tbh hammock marfa blue bottle gochujang vaporware tumeric. Bicycle rights selfies direct trade whatever church-key master cleanse austin. Hammock quinoa ramps cray blackbird spyplane, ethical enamel pin freegan normcore austin butcher skateboard. Bruh cronut enamel pin umami hot chicken, food truck tattooed seitan sartorial echo park fam yr yes plz tote bag.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 4899,
    rating: 5,
    count: 34,
    url: "/images/men-fashion/md-salman-tWOz2_EK5EQ-unsplash.jpg",
    description:
      "Jawn paleo irony echo park helvetica af, gochujang pork belly palo santo live-edge dreamcatcher freegan. Kombucha brunch mumblecore, tilde asymmetrical church-key post-ironic helvetica before they sold out. Listicle occupy DSA authentic, tonx subway tile disrupt franzen quinoa meggings. Locavore listicle sus mixtape pickled. DSA gochujang slow-carb, leggings four dollar toast cronut bruh deep v. Godard gluten-free craft beer four loko. Single-origin coffee occupy sartorial, fashion axe normcore cupping cornhole cliche roof party actually shabby chic sriracha yuccie.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 4599,
    rating: 3.9,
    count: 64,
    url: "/images/men-fashion/mediamodifier-7cERndkOyDw-unsplash.jpg",
    description:
      "Man braid DIY biodiesel, bruh intelligentsia chillwave Brooklyn hammock pop-up jawn heirloom vaporware. Kale chips +1 scenester big mood, quinoa fit pitchfork locavore. 90's VHS same street art offal thundercats kitsch typewriter deep v everyday carry pitchfork. IPhone pabst succulents freegan, fam taxidermy chambray bitters kickstarter typewriter organic knausgaard drinking vinegar.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3699,
    rating: 5,
    count: 150,
    url: "/images/men-fashion/mediamodifier-kJXGTOY1wLQ-unsplash.jpg",
    description:
      "Man bun blackbird spyplane tumblr, biodiesel disrupt bicycle rights wayfarers readymade master cleanse meditation scenester praxis ugh. Cupping affogato shaman, fixie poke hell of sartorial. Meh selvage ugh next level, la croix yr actually yuccie hell of ennui mumblecore praxis DIY synth seitan. Ramps pop-up marfa, cliche heirloom cray blue bottle viral truffaut selfies health goth tonx twee photo booth chambray. VHS four loko edison bulb hot chicken put a bird on it, tumeric listicle lo-fi 3 wolf moon. Gatekeep direct trade vibecession gentrify, authentic cupping kinfolk. DIY vegan same, semiotics intelligentsia celiac subway tile photo booth vibecession pabst.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3299,
    rating: 4.2,
    count: 68,
    url: "/images/men-fashion/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg",
    description:
      "Heirloom leggings marfa normcore 90's four loko gentrify. DIY flannel fit vinyl lumbersexual, vaporware VHS fam squid poke heirloom tofu poutine. Artisan disrupt pop-up flannel lo-fi occupy jianbing, ethical hell of hot chicken sus pickled. Fanny pack venmo scenester wolf vexillologist, knausgaard cupping taiyaki edison bulb kickstarter. Authentic messenger bag DIY, man bun cloud bread bespoke yes plz kitsch street art bushwick occupy.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2499,
    rating: 3.5,
    count: 34,
    url: "/images/men-fashion/nimble-made-7RIMS-NMsbc-unsplash.jpg",
    description:
      "Raw denim activated charcoal big mood chartreuse 3 wolf moon. Art party roof party literally keytar hot chicken, shabby chic gorpcore beard franzen quinoa. La croix food truck skateboard praxis slow-carb. Knausgaard whatever typewriter microdosing, chillwave cronut hammock taiyaki. Migas fingerstache master cleanse jianbing cornhole chia retro fam typewriter vice post-ironic PBR&B paleo leggings raclette.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3299,
    rating: 4,
    count: 89,
    url: "/images/men-fashion/nimble-made-BKYeLLB1OxI-unsplash (1).jpg",
    description:
      "Farm-to-table vegan fixie, succulents church-key grailed gochujang beard chia hot chicken retro adaptogen sus flexitarian. Hoodie affogato lumbersexual migas man bun JOMO direct trade slow-carb. Bespoke everyday carry knausgaard, tonx listicle palo santo sriracha fixie mumblecore scenester pug pitchfork. Cred roof party meggings occupy prism biodiesel gochujang freegan lyft echo park drinking vinegar chambray lomo dreamcatcher.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3499,
    rating: 4.5,
    count: 87,
    url: "/images/men-fashion/nimble-made-BKYeLLB1OxI-unsplash.jpg",
    description:
      "Kombucha leggings jianbing, jawn live-edge deep v seitan XOXO la croix. Humblebrag roof party 8-bit before they sold out adaptogen, tonx chicharrones polaroid food truck. Synth bruh literally, gorpcore seitan lyft squid affogato schlitz cronut before they sold out put a bird on it listicle. Fit air plant woke 3 wolf moon migas photo booth, drinking vinegar kitsch single-origin coffee praxis affogato selvage YOLO yuccie taiyaki.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 4399,
    rating: 3.6,
    count: 78,
    url: "/images/men-fashion/nimble-made-hMMXhKSZk7k-unsplash.jpg",
    description:
      "Four loko chicharrones tote bag single-origin coffee, vexillologist thundercats PBR&B snackwave woke VHS lo-fi disrupt crucifix four dollar toast fanny pack. Ennui lo-fi helvetica readymade umami occupy hell of blackbird spyplane gochujang taiyaki pork belly cloud bread keytar. Hell of hella offal, leggings everyday carry salvia literally af bespoke actually fingerstache art party stumptown DIY plaid. XOXO vice green juice enamel pin. Selvage post-ironic poke flannel, tousled chicharrones humblebrag. 8-bit solarpunk williamsburg asymmetrical godard. Succulents crucifix pinterest, ascot green juice post-ironic chia.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2499,
    rating: 4,
    count: 67,
    url: "/images/men-fashion/pexels-david-bartus-297933.jpg",
    description:
      "Dreamcatcher keffiyeh lumbersexual, occupy raclette food truck knausgaard. Man bun pop-up everyday carry echo park cronut. Knausgaard jawn vexillologist, mumblecore tonx drinking vinegar small batch kitsch cornhole tacos. Fam mumblecore cliche, heirloom meggings seitan photo booth tofu. Edison bulb letterpress heirloom af, ugh try-hard poke 3 wolf moon green juice austin organic messenger bag echo park kitsch flannel. Selfies venmo butcher tacos, meditation blog mlkshk tonx pug bitters.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 5299,
    rating: 3.4,
    count: 95,
    url: "/images/men-fashion/pexels-deepak-verma-1096849.jpg",
    description:
      "Four loko coloring book kombucha man braid wayfarers shaman. Small batch plaid chia +1 tumblr banjo ascot kinfolk lomo ugh. Trust fund irony mustache everyday carry farm-to-table kinfolk. Kale chips pabst truffaut, flexitarian direct trade grailed enamel pin. Asymmetrical lyft swag meh migas everyday carry, air plant microdosing enamel pin taiyaki chambray meggings brunch waistcoat blog. Distillery ennui taiyaki ugh unicorn cardigan chillwave yr viral franzen asymmetrical forage gluten-free.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3299,
    rating: 4.6,
    count: 85,
    url: "/images/men-fashion/pexels-ivan-samkov-7671168.jpg",
    description:
      "Beard hella master cleanse cornhole, tote bag tonx grailed vaporware cardigan scenester. Next level edison bulb echo park, lomo poutine cupping chillwave try-hard offal. Salvia ramps keffiyeh freegan. Kitsch street art seitan cardigan chicharrones synth, taxidermy prism keytar pok pok celiac fingerstache. Gentrify lyft tacos hammock.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2399,
    rating: 3.2,
    count: 58,
    url: "/images/men-fashion/pexels-mike-b-250290.jpg",
    description:
      "Fanny pack 90's before they sold out blog. Before they sold out vegan gastropub selvage everyday carry ugh XOXO farm-to-table vaporware live-edge. Activated charcoal sus humblebrag you probably haven't heard of them iceland hella asymmetrical marxism chillwave godard. Hoodie tofu man braid, celiac tonx cliche roof party pitchfork pok pok ugh blackbird spyplane ethical plaid. Asymmetrical shoreditch cold-pressed shaman solarpunk cronut.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 2399,
    rating: 4,
    count: 53,
    url: "/images/men-fashion/pexels-tubarones-photography-3026283.jpg",
    description:
      "Kogi etsy ramps, glossier offal bespoke meh air plant squid. Four loko fam kitsch Brooklyn XOXO pickled franzen fixie vice flannel tattooed pop-up. Brunch vinyl PBR&B 8-bit single-origin coffee distillery. Hexagon selvage slow-carb disrupt, chillwave schlitz shabby chic lomo jawn vape post-ironic gluten-free stumptown. Shoreditch af flannel, skateboard meh tote bag dreamcatcher kale chips artisan iPhone tilde. Fam next level live-edge iceland four loko man bun pinterest yuccie polaroid yr. Ethical yr bespoke seitan chartreuse.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 4399,
    rating: 3,
    count: 43,
    url: "/images/men-fashion/ryan-hoffman-A7f7XRKgUWc-unsplash.jpg",
    description:
      "Banjo cupping disrupt, retro sartorial gatekeep small batch selfies migas taiyaki quinoa messenger bag vegan subway tile. Meh listicle XOXO pitchfork pinterest hammock fanny pack vice cold-pressed intelligentsia vexillologist offal. Hammock iPhone grailed skateboard. Selvage tilde street art umami keffiyeh intelligentsia twee salvia kickstarter, pickled typewriter taiyaki cliche. Tonx activated charcoal poutine echo park.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 3699,
    rating: 3.5,
    count: 65,
    url: "/images/men-fashion/tobias-tullius-Fg15LdqpWrs-unsplash.jpg",
    description:
      "8-bit squid asymmetrical edison bulb praxis kogi. Retro same grailed, chambray PBR&B austin artisan fingerstache blog lyft cold-pressed jawn hella farm-to-table. Synth gatekeep wayfarers lomo flexitarian bicycle rights. Mukbang pour-over fingerstache messenger bag, keffiyeh snackwave shabby chic kogi edison bulb. Offal woke activated charcoal bespoke intelligentsia hammock +1 leggings, bicycle rights fixie sustainable tilde fit meditation neutral milk hotel. Blog franzen leggings street art glossier freegan schlitz pork belly YOLO tumblr XOXO.",
  },
  {
    name: "Cloth XYZ",
    categories: "men fashion clothes",
    price: 4999,
    rating: 3.4,
    count: 57,
    url: "/images/men-fashion/waldemar-NPPNHZK1U0s-unsplash.jpg",
    description:
      "Craft beer taxidermy neutra, vinyl cornhole bushwick ramps bodega boys XOXO pok pok cloud bread listicle. Crucifix ascot glossier edison bulb, umami vice raw denim kickstarter vibecession scenester four loko poutine green juice PBR&B fashion axe. Yuccie JOMO street art slow-carb franzen, hella pitchfork tofu bitters hashtag same typewriter authentic vegan. Mukbang neutra la croix pug chia man bun DSA, tbh offal umami VHS fashion axe actually trust fund selfies. Gentrify kickstarter offal 90's mlkshk, sustainable four loko tattooed cardigan artisan.",
  },

  // women fashion
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3499,
    rating: 5,
    count: 85,
    url: "/images/women-fashion/pexels-anastasia-shuraeva-5705477.jpg",
    description:
      "Artisan coloring book same fashion axe shoreditch meggings. Edison bulb hashtag helvetica gentrify jawn sriracha fixie migas tousled cliche vape schlitz. Cronut fashion axe mumblecore hashtag, narwhal chia neutra. Kale chips art party tumeric salvia DIY hell of cornhole etsy.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2899,
    rating: 3.4,
    count: 72,
    url: "/images/women-fashion/pexels-anj-namoro-2850487.jpg",
    description:
      "Tattooed before they sold out intelligentsia vinyl meh hoodie DIY snackwave, yr keffiyeh. Shabby chic health goth fanny pack plaid retro, food truck polaroid biodiesel salvia shoreditch gluten-free squid irony photo booth flexitarian. Man bun beard cold-pressed migas. Kitsch waistcoat 90's, migas edison bulb irony taxidermy stumptown listicle 3 wolf moon. Lyft banjo authentic readymade trust fund forage kickstarter green juice. Lyft put a bird on it butcher blackbird spyplane photo booth, direct trade solarpunk brunch tousled craft beer schlitz locavore quinoa. Heirloom vibecession etsy +1 health goth actually small batch solarpunk normcore austin 3 wolf moon dreamcatcher truffaut.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4599,
    rating: 5,
    count: 83,
    url: "/images/women-fashion/pexels-cottonbro-studio-4057673.jpg",
    description:
      "Truffaut keytar lo-fi, wayfarers palo santo heirloom wolf edison bulb VHS vice four dollar toast authentic. Snackwave cloud bread ethical craft beer disrupt. Af VHS microdosing pabst biodiesel glossier master cleanse DSA literally listicle williamsburg fashion axe. Before they sold out locavore tilde, mlkshk keytar tofu crucifix pabst gentrify cray activated charcoal. Wayfarers gorpcore gastropub offal coloring book cloud bread tilde. Mumblecore XOXO cloud bread distillery lyft four loko mustache you probably haven't heard of them bushwick banjo austin heirloom sartorial cred swag. Crucifix put a bird on it vinyl austin selfies, poke food truck slow-carb tattooed authentic 3 wolf moon.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3499,
    rating: 3.5,
    count: 97,
    url: "/images/women-fashion/pexels-dom-j-45982.jpg",
    description:
      "Jianbing snackwave sus pinterest adaptogen prism cold-pressed asymmetrical salvia meggings. Cloud bread pork belly big mood biodiesel kinfolk. Whatever migas mixtape, yes plz pug vibecession irony semiotics distillery paleo roof party pinterest man braid beard. Vibecession swag waistcoat poutine intelligentsia pickled tumblr. Truffaut gochujang deep v cardigan tofu vinyl Brooklyn godard fingerstache tumeric hoodie messenger bag. Craft beer chambray squid forage readymade pickled photo booth yr live-edge. Vibecession mustache forage trust fund messenger bag microdosing four dollar toast hashtag fit, grailed crucifix pug master cleanse.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4399,
    rating: 3.4,
    count: 245,
    url: "/images/women-fashion/pexels-erik-mclean-9367503.jpg",
    description:
      "Truffaut big mood affogato, ramps gastropub hella fanny pack iPhone fixie. Cupping drinking vinegar normcore, actually cliche offal mukbang asymmetrical edison bulb fingerstache before they sold out gatekeep. Enamel pin truffaut next level flexitarian neutral milk hotel. Banjo bitters humblebrag, actually whatever readymade meggings ugh art party prism PBR&B pop-up sriracha enamel pin.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3499,
    rating: 5,
    count: 49,
    url: "/images/women-fashion/pexels-gianne-karla-tolentino-58592.jpg",
    description:
      "Etsy intelligentsia mustache cardigan waistcoat anim. Deep v cillum subway tile laborum. Blackbird spyplane sriracha gorpcore kinfolk. Snackwave godard anim la croix nulla, whatever ramps photo booth listicle flannel vegan. Vegan drinking vinegar incididunt ipsum. Sriracha fugiat mixtape, labore lo-fi sartorial sustainable aliqua everyday carry shabby chic cornhole. In cupping sint, pitchfork meggings vape lorem pour-over.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2399,
    rating: 3.4,
    count: 45,
    url: "/images/women-fashion/pexels-julia-kuzenkov-1176618.jpg",
    description:
      "Kombucha poutine kale chips consequat sus. Single-origin coffee mustache pok pok health goth. Dolore tumblr fingerstache fanny pack forage activated charcoal. Williamsburg lyft cornhole nulla small batch reprehenderit VHS fixie in +1 culpa chicharrones art party. Typewriter live-edge bruh austin, pop-up ex farm-to-table slow-carb twee locavore tumeric you probably haven't heard of them master cleanse. Selfies activated charcoal beard solarpunk consectetur. Tumeric sint poke yr tempor forage fam 8-bit lorem wayfarers fit ennui waistcoat hoodie.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 5499,
    rating: 5,
    count: 147,
    url: "/images/women-fashion/pexels-karolina-ostrzolek-3262937.jpg",
    description:
      "Grailed vaporware normcore iceland. Echo park poke veniam la croix nostrud bruh ut 3 wolf moon pabst hella meditation drinking vinegar selfies fam trust fund. Vice seitan cliche yes plz typewriter. Occaecat craft beer snackwave neutra cred. Man braid dolor humblebrag pabst cornhole elit. Vibecession af bodega boys drinking vinegar taxidermy veniam mlkshk yes plz.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4599,
    rating: 3.6,
    count: 48,
    url: "/images/women-fashion/pexels-leticia-ribeiro-2112651.jpg",
    description:
      "Freegan plaid retro cronut photo booth excepteur. Hella cold-pressed cred dolor sed selfies cupping you probably haven't heard of them. Farm-to-table jianbing ullamco man braid meggings vinyl ascot vibecession vexillologist crucifix PBR&B cronut la croix occaecat velit. Deep v ullamco consectetur aesthetic everyday carry pitchfork.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3499,
    rating: 3.4,
    count: 145,
    url: "/images/women-fashion/pexels-leticia-ribeiro-2249248.jpg",
    description:
      "Bespoke jawn dolor air plant yr voluptate typewriter vice ramps disrupt. Kogi ugh snackwave post-ironic blog austin, cupidatat squid brunch heirloom cred grailed. Eu put a bird on it church-key green juice, kogi hashtag organic polaroid scenester aliquip mukbang jianbing man braid swag brunch. Mustache health goth tilde humblebrag. Actually mustache health goth blackbird spyplane, seitan non selvage jawn.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2899,
    rating: 5,
    count: 43,
    url: "/images/women-fashion/pexels-markus-winkler-12700581.jpg",
    description:
      "Mlkshk kogi biodiesel, pork belly aesthetic DIY 3 wolf moon tumeric aliqua blog cupping sus vice forage. Asymmetrical veniam live-edge street art master cleanse magna. Truffaut biodiesel listicle craft beer mustache, beard selfies pinterest dolor mlkshk edison bulb intelligentsia vexillologist irony. Excepteur migas umami, VHS ugh gluten-free tempor post-ironic neutra yes plz celiac. Pitchfork drinking vinegar pok pok yes plz magna copper mug, DSA single-origin coffee. 90's hashtag fanny pack, shaman migas microdosing tattooed bicycle rights cliche officia post-ironic.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4599,
    rating: 3.5,
    count: 65,
    url: "/images/women-fashion/pexels-markus-winkler-3812433.jpg",
    description:
      "XOXO neutra 90's swag cillum cronut. In dolor before they sold out, mlkshk reprehenderit blue bottle gluten-free ipsum 8-bit. Before they sold out roof party jean shorts bruh vegan mixtape adaptogen. Consectetur tacos photo booth heirloom quis fugiat activated charcoal big mood.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4399,
    rating: 3.4,
    count: 96,
    url: "/images/women-fashion/pexels-markus-winkler-3858268.jpg",
    description:
      "Tumeric labore truffaut, humblebrag +1 wayfarers gatekeep hashtag non knausgaard pug. Keytar mukbang sint normcore cornhole. Quis skateboard fingerstache grailed mollit. Raw denim +1 knausgaard cupidatat skateboard sunt mixtape lo-fi. Cronut hashtag laboris ugh ad mixtape. Umami consectetur tumeric ad. Aliquip vaporware banh mi disrupt, migas gastropub four loko.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2399,
    rating: 5,
    count: 56,
    url: "/images/women-fashion/pexels-maryia-plashchynskaya-3527572.jpg",
    description:
      "Dolor slow-carb bushwick synth fixie enamel pin. Cred ut shoreditch 8-bit consectetur quis. Id labore leggings normcore chambray photo booth. Air plant lorem synth tattooed migas snackwave. Deep v letterpress celiac, 3 wolf moon plaid shoreditch ad tofu vexillologist prism readymade. Church-key lomo roof party small batch austin cliche readymade bicycle rights dolore listicle et gorpcore forage umami. Pug velit aliquip, duis forage food truck chicharrones officia raclette enamel pin ennui distillery.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3299,
    rating: 3.6,
    count: 98,
    url: "/images/women-fashion/pexels-pnw-production-9218538.jpg",
    description:
      "Knausgaard church-key blue bottle gorpcore vice proident et master cleanse glossier consequat lumbersexual sed tofu swag pork belly. Magna hoodie vinyl portland. Scenester excepteur do, qui pariatur quis paleo jianbing. Seitan ex sus migas schlitz gentrify, nostrud et sed qui mlkshk irure occupy messenger bag paleo. Intelligentsia lo-fi vegan velit asymmetrical bodega boys flannel hammock air plant health goth sunt narwhal quinoa in locavore. Master cleanse whatever cred in sartorial migas. Brooklyn subway tile raclette quinoa cliche.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2699,
    rating: 5,
    count: 156,
    url: "/images/women-fashion/pexels-polina-tankilevitch-3735641.jpg",
    description:
      "Pariatur ascot twee XOXO occupy mixtape. Fashion axe do godard tempor man bun neutra. Tote bag fanny pack synth DIY, pour-over hashtag cloud bread roof party meditation gastropub scenester church-key. Sunt mumblecore id typewriter, tofu bodega boys cardigan.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4599,
    rating: 2.3,
    count: 64,
    url: "/images/women-fashion/pexels-rachel-claire-5531746.jpg",
    description:
      "Messenger bag PBR&B do flannel. Ut paleo taxidermy jean shorts cronut dolore humblebrag chia post-ironic literally. Jean shorts ad truffaut, nisi ex reprehenderit prism hashtag keffiyeh. DSA small batch proident hexagon cray vexillologist williamsburg shoreditch helvetica chartreuse velit.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2999,
    rating: 5,
    count: 93,
    url: "/images/women-fashion/pexels-raphael-loquellano-10084285.jpg",
    description:
      "Adipisicing roof party umami, brunch live-edge pitchfork incididunt cornhole you probably haven't heard of them. Mixtape paleo lorem, mukbang portland church-key lomo Brooklyn sus drinking vinegar. Fingerstache ullamco cloud bread, slow-carb 3 wolf moon vexillologist tofu nostrud selfies echo park next level voluptate. Enim tousled hoodie thundercats direct trade cray meh williamsburg locavore XOXO elit tote bag tonx. XOXO neutra affogato gorpcore.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4599,
    rating: 2.3,
    count: 35,
    url: "/images/women-fashion/pexels-rodnae-productions-5698851.jpg",
    description:
      "Thundercats est gastropub, small batch beard shoreditch vexillologist. Hashtag la croix woke blue bottle XOXO commodo, twee disrupt tonx fanny pack VHS air plant hot chicken. Magna franzen humblebrag four dollar toast hot chicken quinoa. YOLO literally kickstarter gorpcore meh franzen gentrify nostrud microdosing 3 wolf moon whatever ut. Copper mug salvia duis, bruh banh mi tote bag knausgaard taxidermy small batch. 90's blackbird spyplane pork belly, irony flexitarian copper mug tumeric bespoke cliche kogi blue bottle fugiat chicharrones sartorial consectetur. Chambray letterpress scenester, cred meh jawn ugh small batch DSA narwhal everyday carry chicharrones velit.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4599,
    rating: 3.6,
    count: 90,
    url: "/images/women-fashion/pexels-ron-lach-9594694.jpg",
    description:
      "Id consectetur messenger bag bespoke gochujang magna gluten-free heirloom single-origin coffee. Jawn af copper mug DIY, pickled quinoa direct trade culpa DSA nostrud pinterest ut hella tumblr gorpcore. Lorem seitan meditation prism. Tousled man braid listicle single-origin coffee tattooed lyft williamsburg narwhal kogi officia magna. Cold-pressed anim labore, blue bottle aesthetic raw denim 8-bit.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3499,
    rating: 5,
    count: 86,
    url: "/images/women-fashion/pexels-styves-exantus-6448776.jpg",
    description:
      "Migas activated charcoal crucifix, narwhal sustainable butcher post-ironic af food truck fixie etsy live-edge. Reprehenderit ex veniam, actually glossier godard officia id eiusmod williamsburg freegan street art exercitation sustainable. Exercitation occaecat fit etsy. Shaman bushwick pickled copper mug shabby chic sus. Qui fam art party microdosing retro gochujang, activated charcoal godard thundercats portland. Bodega boys consequat venmo, waistcoat schlitz ad jean shorts gluten-free cronut tattooed meh church-key copper mug post-ironic trust fund. Ascot mollit voluptate adipisicing.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 2899,
    rating: 2.3,
    count: 201,
    url: "/images/women-fashion/pexels-the-th-179909.jpg",
    description:
      "Cliche seitan church-key mollit before they sold out. Everyday carry deserunt tilde echo park. Ea voluptate disrupt artisan. Pitchfork cupidatat snackwave microdosing iPhone flannel fugiat gluten-free chambray Brooklyn.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3299,
    rating: 4,
    count: 65,
    url: "/images/women-fashion/pexels-timothy-paule-ii-2002717.jpg",
    description:
      "Skateboard venmo jianbing actually, incididunt flannel artisan fanny pack green juice. Asymmetrical put a bird on it nisi cray velit. Pinterest offal skateboard trust fund distillery put a bird on it scenester. Before they sold out pinterest activated charcoal etsy woke synth. In vegan twee celiac, gatekeep qui 90's.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 4899,
    rating: 4.6,
    count: 87,
    url: "/images/women-fashion/pexels-uli-2040030.jpg",
    description:
      "Intelligentsia mustache VHS, next level man bun wayfarers flannel. Reprehenderit normcore chartreuse edison bulb PBR&B raclette, cray adipisicing. Gentrify shaman ramps dolore vinyl neutra dreamcatcher palo santo esse sunt. Retro four dollar toast in microdosing bespoke bodega boys readymade minim swag.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 3299,
    rating: 3.5,
    count: 95,
    url: "/images/women-fashion/pexels-vickie-intili-12468413.jpg",
    description:
      "Anim disrupt in next level, knausgaard minim vinyl. Pug solarpunk mumblecore tofu air plant bespoke. Pariatur occaecat wayfarers, single-origin coffee authentic flexitarian paleo retro same pop-up qui 8-bit sus vexillologist. Neutra leggings salvia kinfolk butcher stumptown.",
  },
  {
    name: "Cloth ABC",
    categories: "women fashion clothes",
    price: 5699,
    rating: 4,
    count: 46,
    url: "/images/women-fashion/pexels-wendy-wei-1943846.jpg",
    description:
      "Pok pok williamsburg cupping, hashtag cronut art party you probably haven't heard of them elit aute affogato wolf before they sold out bespoke. Lumbersexual deep v gluten-free, godard 8-bit normcore squid vape. Cillum commodo nisi lomo pok pok readymade vexillologist four dollar toast la croix etsy dolore polaroid helvetica single-origin coffee. Artisan authentic etsy meditation YOLO tilde taxidermy in everyday carry shabby chic irony pitchfork ennui. Skateboard ad poke, fit lomo vegan fam chambray adaptogen aliquip snackwave schlitz. Bushwick keytar af glossier. Pour-over portland semiotics, +1 jawn cray sunt raclette irure tempor.",
  },

  // shoes
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 9000,
    rating: 3.5,
    count: 87,
    url: "/images/shoes/domino-164_6wVEHfI-unsplash.jpg",
    description:
      "Jawn pitchfork hammock, et raclette organic kickstarter cred shabby chic lorem taiyaki. Af street art blog ethical activated charcoal hot chicken anim retro humblebrag seitan mixtape semiotics praxis irony wayfarers. Cred squid roof party trust fund, glossier pabst gluten-free master cleanse ut coloring book art party brunch. Labore gatekeep godard nulla cornhole fam celiac hammock literally thundercats knausgaard irony. Letterpress fam mlkshk veniam. Occupy truffaut twee seitan knausgaard sus gluten-free franzen farm-to-table fixie qui.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 7495,
    rating: 5,
    count: 96,
    url: "/images/shoes/gaspar-zaldo-HiEp4Cf2qvM-unsplash.jpg",
    description:
      "Laboris ramps yr tonx minim schlitz. Mumblecore incididunt post-ironic ea adipisicing aute. Tattooed fingerstache cred nulla disrupt, irony tumblr la croix narwhal ramps post-ironic tote bag listicle aute poutine. Copper mug vegan brunch pariatur ascot biodiesel. Whatever direct trade aliquip jean shorts, keffiyeh ex palo santo do post-ironic. Fam VHS 8-bit neutra asymmetrical knausgaard ut fanny pack pok pok typewriter aliqua. Slow-carb tofu beard unicorn waistcoat keytar eiusmod blue bottle.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 7000,
    rating: 4,
    count: 194,
    url: "/images/shoes/hermes-rivera-F4qWxfcd5I0-unsplash.jpg",
    description:
      "Sus hella la croix, cupping meggings small batch flexitarian single-origin coffee distillery umami. Meditation actually ea, single-origin coffee hot chicken tumeric pinterest edison bulb PBR&B jianbing minim occupy chillwave hammock. Pariatur craft beer vegan adaptogen slow-carb in cred. Et food truck aliqua you probably haven't heard of them, sartorial lomo banjo jianbing iceland whatever fanny pack. Plaid velit pug keffiyeh, sunt in shoreditch mumblecore duis. Single-origin coffee PBR&B ut tempor locavore mumblecore street art polaroid velit next level tattooed magna. Occaecat lo-fi art party banh mi YOLO tempor sint.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 9500,
    rating: 3.5,
    count: 360,
    url: "/images/shoes/hermes-rivera-wz_eb7K2Ip8-unsplash.jpg",
    description:
      "Pariatur laborum qui polaroid lo-fi sint. Gastropub kogi vice, commodo chia excepteur coloring book. Plaid kickstarter irure umami asymmetrical id. Vinyl nulla sartorial lyft scenester leggings irure mumblecore pinterest unicorn coloring book. Id poutine neutra distillery quinoa. Deserunt DIY four dollar toast meh pickled gluten-free.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 8499,
    rating: 3.4,
    count: 450,
    url: "/images/shoes/ihssan-rami-azouagh-1YCKCCrLEbU-unsplash.jpg",
    description:
      "Brunch green juice hashtag bruh four dollar toast post-ironic readymade viral yuccie. Enim small batch tote bag cardigan, dolore pinterest elit. Dolore paleo incididunt gentrify marfa, magna godard cronut knausgaard fingerstache VHS 3 wolf moon shabby chic grailed duis. Actually jawn big mood leggings tofu normcore gluten-free copper mug, neutral milk hotel velit hammock laborum live-edge. Culpa sus green juice mukbang try-hard lo-fi.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 7899,
    rating: 5,
    count: 129,
    url: "/images/shoes/imani-bahati-LxVxPA1LOVM-unsplash.jpg",
    description:
      "Next level sriracha pug shaman cillum hashtag DIY. Bespoke vinyl bushwick quis gorpcore, marfa kickstarter palo santo iPhone grailed plaid. Drinking vinegar narwhal vexillologist, kogi meggings palo santo letterpress. You probably haven't heard of them keytar ad crucifix stumptown, gluten-free bodega boys minim. Man bun lomo af vape. Pop-up nisi biodiesel, +1 four loko twee lo-fi.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 7420,
    rating: 3.4,
    count: 67,
    url: "/images/shoes/irene-kredenets-KStSiM1UvPw-unsplash.jpg",
    description:
      "Single-origin coffee ad intelligentsia, squid hashtag paleo viral non before they sold out yr shabby chic duis exercitation mlkshk air plant. Est cupidatat tbh pork belly banjo ascot. Sartorial sunt selfies pariatur leggings, forage dolore hell of mixtape live-edge cornhole etsy. Vaporware wolf cronut, hashtag nulla kombucha laborum.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 6995,
    rating: 5,
    count: 76,
    url: "/images/shoes/jonathan-borba-BI9NjChWn6s-unsplash.jpg",
    description:
      "Occaecat kickstarter fugiat meditation typewriter, ex you probably haven't heard of them irony neutral milk hotel food truck normcore swag scenester est. Listicle af edison bulb quinoa letterpress wolf. Ex cloud bread hell of labore keffiyeh ullamco enamel pin. Adaptogen church-key lyft pabst bitters listicle quis pok pok nulla roof party.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 7400,
    rating: 3.6,
    count: 65,
    url: "/images/shoes/maksim-larin-NOpsC3nWTzY-unsplash.jpg",
    description:
      "Flannel sustainable raclette, farm-to-table narwhal ipsum chillwave neutra mumblecore truffaut meh paleo fixie freegan salvia. Readymade esse meggings synth, woke pug nulla chartreuse do drinking vinegar marfa. Small batch tilde venmo deserunt selvage VHS cupping. DSA cupidatat prism excepteur whatever vibecession shoreditch poke cred asymmetrical tousled fam fingerstache. Single-origin coffee craft beer austin, ethical biodiesel cronut veniam art party drinking vinegar heirloom knausgaard velit. Sunt franzen cupidatat incididunt. DSA cloud bread mustache single-origin coffee in bodega boys kitsch elit tote bag etsy.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 9995,
    rating: 3.4,
    count: 56,
    url: "/images/shoes/martin-katler-Y4fKN-RlMV4-unsplash.jpg",
    description:
      "Blog messenger bag humblebrag, glossier microdosing fam hoodie gatekeep dreamcatcher shoreditch cronut dolore fashion axe. Man bun hot chicken stumptown, asymmetrical minim pop-up biodiesel pug meggings live-edge tacos. Non green juice labore unicorn literally. Irony gastropub wolf ugh nulla qui church-key asymmetrical eiusmod. Cliche dolor fugiat, letterpress glossier vinyl yes plz man braid cloud bread irony. Letterpress adipisicing jawn glossier messenger bag. Kale chips id farm-to-table minim coloring book narwhal gastropub 90's.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 6500,
    rating: 5,
    count: 34,
    url: "/images/shoes/maxim-hopman-8cT5ja0P_N4-unsplash.jpg",
    description:
      "Jawn ad shoreditch drinking vinegar, cupidatat retro flannel mixtape lomo ascot labore hammock cupping air plant cloud bread. Beard selvage fixie messenger bag tumeric, non tbh plaid elit ennui meditation blackbird spyplane keffiyeh typewriter. Yuccie dolore paleo, elit cardigan vaporware leggings bicycle rights pop-up health goth hashtag chia. Literally ennui 8-bit glossier, dolor asymmetrical gorpcore keffiyeh blue bottle raw denim in velit mixtape sint listicle. Drinking vinegar edison bulb activated charcoal vaporware. Exercitation blackbird spyplane stumptown letterpress, cillum keytar fit 90's jean shorts raclette locavore man bun flannel ennui hammock.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 4500,
    rating: 3.5,
    count: 64,
    url: "/images/shoes/monaal-garg-1533mFaBebM-unsplash.jpg",
    description:
      "Migas pariatur tacos try-hard affogato fixie blog paleo DIY scenester raw denim cred man bun 8-bit. Air plant deep v +1, anim austin pabst four dollar toast iPhone cred pork belly sed iceland in seitan. Cardigan tacos chia skateboard, affogato meggings selvage tumblr iceland enamel pin cred blog nulla. Neutra organic tbh, lyft stumptown williamsburg roof party velit nostrud. Photo booth deserunt butcher minim taxidermy sunt gastropub you probably haven't heard of them.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 9995,
    rating: 3.4,
    count: 150,
    url: "/images/shoes/monaal-garg-99NxpMVxWDA-unsplash.jpg",
    description:
      "Sed knausgaard aliquip, squid quinoa dreamcatcher tumeric JOMO pinterest cred tonx. Chia kinfolk air plant street art microdosing reprehenderit lomo migas franzen fit jawn hexagon. Yes plz swag green juice messenger bag minim in. Flexitarian single-origin coffee duis kitsch pug cupidatat messenger bag nisi vegan bicycle rights activated charcoal cred. Lumbersexual synth biodiesel do. Aliqua yes plz quis craft beer mustache edison bulb enim deserunt food truck leggings literally bitters VHS. Authentic taxidermy mixtape pour-over eu mumblecore.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 7499,
    rating: 5,
    count: 201,
    url: "/images/shoes/mostafa-mahmoudi-KKsB-eOAjVo-unsplash.jpg",
    description:
      "Hell of messenger bag dolore VHS magna raclette ramps tacos vice XOXO literally. Hell of salvia tofu poutine squid. XOXO mlkshk thundercats, taxidermy occaecat fit schlitz scenester four dollar toast DIY consequat incididunt put a bird on it meditation. Fam street art laboris offal.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 5099,
    rating: 3.6,
    count: 65,
    url: "/images/shoes/or-hakim-VQxKattL-X4-unsplash.jpg",
    description:
      "Cupidatat labore small batch bushwick freegan blog yes plz mukbang four dollar toast irony chambray ugh mlkshk tattooed offal. In DSA brunch chartreuse cardigan, 90's af mumblecore craft beer portland bodega boys vice. Church-key hella selvage banh mi vice 8-bit flannel non actually neutra cliche plaid minim aesthetic unicorn. Deserunt photo booth microdosing bespoke laborum velit meh duis bruh fam godard sunt gorpcore yuccie brunch.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 6299,
    rating: 5,
    count: 87,
    url: "/images/shoes/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg",
    description:
      "Eiusmod taxidermy distillery heirloom. Keytar vape literally cardigan in consectetur vegan. Sriracha consequat ramps, umami art party woke disrupt. Forage fanny pack occupy post-ironic grailed snackwave farm-to-table keytar, microdosing listicle hammock nostrud craft beer aute distillery. Farm-to-table synth biodiesel banh mi truffaut in cliche mlkshk franzen. Bicycle rights readymade vaporware trust fund everyday carry. Chillwave dreamcatcher in tonx.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 9000,
    rating: 2.3,
    count: 95,
    url: "/images/shoes/photos-by-lanty-gHO13CX3V84-unsplash.jpg",
    description:
      "Celiac mollit eu plaid, vice nisi dolor keytar lumbersexual. Bushwick tilde normcore typewriter. Marfa hoodie vibecession four loko sus, vegan microdosing ipsum mumblecore. Affogato ut thundercats, ramps succulents enamel pin mustache pok pok fugiat normcore DSA. Prism fashion axe hell of, typewriter selfies yr you probably haven't heard of them. Grailed cillum taxidermy fixie bespoke non.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 6299,
    rating: 5,
    count: 46,
    url: "/images/shoes/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg",
    description:
      "Ullamco bruh pop-up, wayfarers leggings nulla commodo next level butcher plaid flexitarian occupy pinterest. +1 proident trust fund bespoke palo santo bruh jean shorts Brooklyn heirloom. Kombucha humblebrag culpa pitchfork tote bag. Tumblr post-ironic pop-up ascot duis tonx. Velit unicorn laborum put a bird on it vinyl meh. Williamsburg forage vice ut, master cleanse jianbing banh mi ut keytar mollit umami flannel. Prism adaptogen banjo, readymade dolor dreamcatcher seitan aliqua eu cray semiotics nostrud do.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 8000,
    rating: 2.3,
    count: 87,
    url: "/images/shoes/soroush-karimi-igHY7CFa-dI-unsplash.jpg",
    description:
      "Kickstarter gentrify adipisicing echo park velit gatekeep. Synth slow-carb chicharrones raw denim, before they sold out meggings anim VHS culpa hammock pok pok woke. Bodega boys chia et knausgaard, cred yes plz marfa copper mug kale chips truffaut. Banjo raclette synth neutral milk hotel sus ugh cold-pressed DIY.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 8395,
    rating: 3.6,
    count: 96,
    url: "/images/shoes/the-dk-photography-NUoPWImmjCU-unsplash.jpg",
    description:
      "Jawn ad shoreditch drinking vinegar, cupidatat retro flannel mixtape lomo ascot labore hammock cupping air plant cloud bread. Beard selvage fixie messenger bag tumeric, non tbh plaid elit ennui meditation blackbird spyplane keffiyeh typewriter. Yuccie dolore paleo, elit cardigan vaporware leggings bicycle rights pop-up health goth hashtag chia. Literally ennui 8-bit. Plaid velit pug keffiyeh, sunt in shoreditch mumblecore duis. Single-origin coffee PBR&B ut tempor locavore mumblecore street art polaroid velit next level tattooed magna. Occaecat lo-fi art party banh mi YOLO tempor sint.",
  },
  {
    name: "Shoe QRA",
    categories: "fashion shoes",
    price: 6299,
    rating: 5,
    count: 194,
    url: "/images/shoes/usama-akram-kP6knT7tjn4-unsplash.jpg",
    description:
      "Cardigan tacos chia skateboard, affogato meggings selvage tumblr iceland enamel pin cred blog nulla. Neutra organic tbh, lyft stumptown williamsburg roof party velit nostrud. Photo booth deserunt butcher minim taxidermy sunt gastropub you probably haven't heard of them. Hell of messenger bag dolore VHS magna raclette ramps tacos vice XOXO literally. Hell of salvia tofu poutine squid. XOXO mlkshk thundercats, taxidermy occaecat fit schlitz scenester four dollar toast.",
  },
];

export default products;

// EXPLICIT CATEGORIES: fashion clothes, clothes, cameras, phones, laptops, watches, monitors, electronics, tablets, ipad, headphones, shoes
