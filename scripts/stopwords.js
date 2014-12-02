var stopwords = {"danish": ["og", "i", "jeg", "det", "at", "en", "den", "til", "er", "som", "p\u00e5", "de", "med", "han", "af", "for", "ikke", "der", "var", "mig", "sig", "men", "et", "har", "om", "vi", "min", "havde", "ham", "hun", "nu", "over", "da", "fra", "du", "ud", "sin", "dem", "os", "op", "man", "hans", "hvor", "eller", "hvad", "skal", "selv", "her", "alle", "vil", "blev", "kunne", "ind", "n\u00e5r", "v\u00e6re", "dog", "noget", "ville", "jo", "deres", "efter", "ned", "skulle", "denne", "end", "dette", "mit", "ogs\u00e5", "under", "have", "dig", "anden", "hende", "mine", "alt", "meget", "sit", "sine", "vor", "mod", "disse", "hvis", "din", "nogle", "hos", "blive", "mange", "ad", "bliver", "hendes", "v\u00e6ret", "thi", "jer", "s\u00e5dan"],
"dutch": ["de", "en", "van", "ik", "te", "dat", "die", "in", "een", "hij", "het", "niet", "zijn", "is", "was", "op", "aan", "met", "als", "voor", "had", "er", "maar", "om", "hem", "dan", "zou", "of", "wat", "mijn", "men", "dit", "zo", "door", "over", "ze", "zich", "bij", "ook", "tot", "je", "mij", "uit", "der", "daar", "haar", "naar", "heb", "hoe", "heeft", "hebben", "deze", "u", "want", "nog", "zal", "me", "zij", "nu", "ge", "geen", "omdat", "iets", "worden", "toch", "al", "waren", "veel", "meer", "doen", "toen", "moet", "ben", "zonder", "kan", "hun", "dus", "alles", "onder", "ja", "eens", "hier", "wie", "werd", "altijd", "doch", "wordt", "wezen", "kunnen", "ons", "zelf", "tegen", "na", "reeds", "wil", "kon", "niets", "uw", "iemand", "geweest", "andere"],
"french": ["au", "aux", "avec", "ce", "ces", "dans", "de", "des", "du", "elle", "en", "et", "eux", "il", "je", "la", "le", "leur", "lui", "ma", "mais", "me", "m\u00eame", "mes", "moi", "mon", "ne", "nos", "notre", "nous", "on", "ou", "par", "pas", "pour", "qu", "que", "qui", "sa", "se", "ses", "son", "sur", "ta", "te", "tes", "toi", "ton", "tu", "un", "une", "vos", "votre", "vous", "c", "d", "j", "l", "\u00e0", "m", "n", "s", "t", "y", "\u00e9t\u00e9", "\u00e9t\u00e9e", "\u00e9t\u00e9es", "\u00e9t\u00e9s", "\u00e9tant", "\u00e9tante", "\u00e9tants", "\u00e9tantes", "suis", "es", "est", "sommes", "\u00eates", "sont", "serai", "seras", "sera", "serons", "serez", "seront", "serais", "serait", "serions", "seriez", "seraient", "\u00e9tais", "\u00e9tait", "\u00e9tions", "\u00e9tiez", "\u00e9taient", "fus", "fut", "f\u00fbmes", "f\u00fbtes", "furent", "sois", "soit", "soyons", "soyez", "soient", "fusse", "fusses", "f\u00fbt", "fussions", "fussiez", "fussent", "ayant", "ayante", "ayantes", "ayants", "eu", "eue", "eues", "eus", "ai", "as", "avons", "avez", "ont", "aurai", "auras", "aura", "aurons", "aurez", "auront", "aurais", "aurait", "aurions", "auriez", "auraient", "avais", "avait", "avions", "aviez", "avaient", "eut", "e\u00fbmes", "e\u00fbtes", "eurent", "aie", "aies", "ait", "ayons", "ayez", "aient", "eusse", "eusses", "e\u00fbt", "eussions", "eussiez", "eussent"],
"german": ["aber", "alle", "allem", "allen", "aller", "alles", "als", "also", "am", "an", "ander", "andere", "anderem", "anderen", "anderer", "anderes", "anderm", "andern", "anderr", "anders", "auch", "auf", "aus", "bei", "bin", "bis", "bist", "da", "damit", "dann", "der", "den", "des", "dem", "die", "das", "da\u00df", "derselbe", "derselben", "denselben", "desselben", "demselben", "dieselbe", "dieselben", "dasselbe", "dazu", "dein", "deine", "deinem", "deinen", "deiner", "deines", "denn", "derer", "dessen", "dich", "dir", "du", "dies", "diese", "diesem", "diesen", "dieser", "dieses", "doch", "dort", "durch", "ein", "eine", "einem", "einen", "einer", "eines", "einig", "einige", "einigem", "einigen", "einiger", "einiges", "einmal", "er", "ihn", "ihm", "es", "etwas", "euer", "eure", "eurem", "euren", "eurer", "eures", "f\u00fcr", "gegen", "gewesen", "hab", "habe", "haben", "hat", "hatte", "hatten", "hier", "hin", "hinter", "ich", "mich", "mir", "ihr", "ihre", "ihrem", "ihren", "ihrer", "ihres", "euch", "im", "in", "indem", "ins", "ist", "jede", "jedem", "jeden", "jeder", "jedes", "jene", "jenem", "jenen", "jener", "jenes", "jetzt", "kann", "kein", "keine", "keinem", "keinen", "keiner", "keines", "k\u00f6nnen", "k\u00f6nnte", "machen", "man", "manche", "manchem", "manchen", "mancher", "manches", "mein", "meine", "meinem", "meinen", "meiner", "meines", "mit", "muss", "musste", "nach", "nicht", "nichts", "noch", "nun", "nur", "ob", "oder", "ohne", "sehr", "sein", "seine", "seinem", "seinen", "seiner", "seines", "selbst", "sich", "sie", "ihnen", "sind", "so", "solche", "solchem", "solchen", "solcher", "solches", "soll", "sollte", "sondern", "sonst", "\u00fcber", "um", "und", "uns", "unse", "unsem", "unsen", "unser", "unses", "unter", "viel", "vom", "von", "vor", "w\u00e4hrend", "war", "waren", "warst", "was", "weg", "weil", "weiter", "welche", "welchem", "welchen", "welcher", "welches", "wenn", "werde", "werden", "wie", "wieder", "will", "wir", "wird", "wirst", "wo", "wollen", "wollte", "w\u00fcrde", "w\u00fcrden", "zu", "zum", "zur", "zwar", "zwischen"],
"hungarian": ["a", "ahogy", "ahol", "aki", "akik", "akkor", "alatt", "\u00e1ltal", "\u00e1ltal\u00e1ban", "amely", "amelyek", "amelyekben", "amelyeket", "amelyet", "amelynek", "ami", "amit", "amolyan", "am\u00edg", "amikor", "\u00e1t", "abban", "ahhoz", "annak", "arra", "arr\u00f3l", "az", "azok", "azon", "azt", "azzal", "az\u00e9rt", "azt\u00e1n", "azut\u00e1n", "azonban", "b\u00e1r", "be", "bel\u00fcl", "benne", "cikk", "cikkek", "cikkeket", "csak", "de", "e", "eddig", "eg\u00e9sz", "egy", "egyes", "egyetlen", "egy\u00e9b", "egyik", "egyre", "ekkor", "el", "el\u00e9g", "ellen", "el\u00f5", "el\u00f5sz\u00f6r", "el\u00f5tt", "els\u00f5", "\u00e9n", "\u00e9ppen", "ebben", "ehhez", "emilyen", "ennek", "erre", "ez", "ezt", "ezek", "ezen", "ezzel", "ez\u00e9rt", "\u00e9s", "fel", "fel\u00e9", "hanem", "hiszen", "hogy", "hogyan", "igen", "\u00edgy", "illetve", "ill.", "ill", "ilyen", "ilyenkor", "ison", "ism\u00e9t", "itt", "j\u00f3", "j\u00f3l", "jobban", "kell", "kellett", "kereszt\u00fcl", "keress\u00fcnk", "ki", "k\u00edv\u00fcl", "k\u00f6z\u00f6tt", "k\u00f6z\u00fcl", "legal\u00e1bb", "lehet", "lehetett", "legyen", "lenne", "lenni", "lesz", "lett", "maga", "mag\u00e1t", "majd", "majd", "m\u00e1r", "m\u00e1s", "m\u00e1sik", "meg", "m\u00e9g", "mellett", "mert", "mely", "melyek", "mi", "mit", "m\u00edg", "mi\u00e9rt", "milyen", "mikor", "minden", "mindent", "mindenki", "mindig", "mint", "mintha", "mivel", "most", "nagy", "nagyobb", "nagyon", "ne", "n\u00e9ha", "nekem", "neki", "nem", "n\u00e9h\u00e1ny", "n\u00e9lk\u00fcl", "nincs", "olyan", "ott", "\u00f6ssze", "\u00f5", "\u00f5k", "\u00f5ket", "pedig", "persze", "r\u00e1", "s", "saj\u00e1t", "sem", "semmi", "sok", "sokat", "sokkal", "sz\u00e1m\u00e1ra", "szemben", "szerint", "szinte", "tal\u00e1n", "teh\u00e1t", "teljes", "tov\u00e1bb", "tov\u00e1bb\u00e1", "t\u00f6bb", "\u00fagy", "ugyanis", "\u00faj", "\u00fajabb", "\u00fajra", "ut\u00e1n", "ut\u00e1na", "utols\u00f3", "vagy", "vagyis", "valaki", "valami", "valamint", "val\u00f3", "vagyok", "van", "vannak", "volt", "voltam", "voltak", "voltunk", "vissza", "vele", "viszont", "volna"],
"italian": ["ad", "al", "allo", "ai", "agli", "all", "agl", "alla", "alle", "con", "col", "coi", "da", "dal", "dallo", "dai", "dagli", "dall", "dagl", "dalla", "dalle", "di", "del", "dello", "dei", "degli", "dell", "degl", "della", "delle", "in", "nel", "nello", "nei", "negli", "nell", "negl", "nella", "nelle", "su", "sul", "sullo", "sui", "sugli", "sull", "sugl", "sulla", "sulle", "per", "tra", "contro", "io", "tu", "lui", "lei", "noi", "voi", "loro", "mio", "mia", "miei", "mie", "tuo", "tua", "tuoi", "tue", "suo", "sua", "suoi", "sue", "nostro", "nostra", "nostri", "nostre", "vostro", "vostra", "vostri", "vostre", "mi", "ti", "ci", "vi", "lo", "la", "li", "le", "gli", "ne", "il", "un", "uno", "una", "ma", "ed", "se", "perch\u00e9", "anche", "come", "dov", "dove", "che", "chi", "cui", "non", "pi\u00f9", "quale", "quanto", "quanti", "quanta", "quante", "quello", "quelli", "quella", "quelle", "questo", "questi", "questa", "queste", "si", "tutto", "tutti", "a", "c", "e", "i", "l", "o", "ho", "hai", "ha", "abbiamo", "avete", "hanno", "abbia", "abbiate", "abbiano", "avr\u00f2", "avrai", "avr\u00e0", "avremo", "avrete", "avranno", "avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero", "avevo", "avevi", "aveva", "avevamo", "avevate", "avevano", "ebbi", "avesti", "ebbe", "avemmo", "aveste", "ebbero", "avessi", "avesse", "avessimo", "avessero", "avendo", "avuto", "avuta", "avuti", "avute", "sono", "sei", "\u00e8", "siamo", "siete", "sia", "siate", "siano", "sar\u00f2", "sarai", "sar\u00e0", "saremo", "sarete", "saranno", "sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero", "ero", "eri", "era", "eravamo", "eravate", "erano", "fui", "fosti", "fu", "fummo", "foste", "furono", "fossi", "fosse", "fossimo", "fossero", "essendo", "faccio", "fai", "facciamo", "fanno", "faccia", "facciate", "facciano", "far\u00f2", "farai", "far\u00e0", "faremo", "farete", "faranno", "farei", "faresti", "farebbe", "faremmo", "fareste", "farebbero", "facevo", "facevi", "faceva", "facevamo", "facevate", "facevano", "feci", "facesti", "fece", "facemmo", "faceste", "fecero", "facessi", "facesse", "facessimo", "facessero", "facendo", "sto", "stai", "sta", "stiamo", "stanno", "stia", "stiate", "stiano", "star\u00f2", "starai", "star\u00e0", "staremo", "starete", "staranno", "starei", "staresti", "starebbe", "staremmo", "stareste", "starebbero", "stavo", "stavi", "stava", "stavamo", "stavate", "stavano", "stetti", "stesti", "stette", "stemmo", "steste", "stettero", "stessi", "stesse", "stessimo", "stessero", "stando"],
"portuguese": ["de", "a", "o", "que", "e", "do", "da", "em", "um", "para", "com", "n\u00e3o", "uma", "os", "no", "se", "na", "por", "mais", "as", "dos", "como", "mas", "ao", "ele", "das", "\u00e0", "seu", "sua", "ou", "quando", "muito", "nos", "j\u00e1", "eu", "tamb\u00e9m", "s\u00f3", "pelo", "pela", "at\u00e9", "isso", "ela", "entre", "depois", "sem", "mesmo", "aos", "seus", "quem", "nas", "me", "esse", "eles", "voc\u00ea", "essa", "num", "nem", "suas", "meu", "\u00e0s", "minha", "numa", "pelos", "elas", "qual", "n\u00f3s", "lhe", "deles", "essas", "esses", "pelas", "este", "dele", "tu", "te", "voc\u00eas", "vos", "lhes", "meus", "minhas", "teu", "tua", "teus", "tuas", "nosso", "nossa", "nossos", "nossas", "dela", "delas", "esta", "estes", "estas", "aquele", "aquela", "aqueles", "aquelas", "isto", "aquilo", "estou", "est\u00e1", "estamos", "est\u00e3o", "estive", "esteve", "estivemos", "estiveram", "estava", "est\u00e1vamos", "estavam", "estivera", "estiv\u00e9ramos", "esteja", "estejamos", "estejam", "estivesse", "estiv\u00e9ssemos", "estivessem", "estiver", "estivermos", "estiverem", "hei", "h\u00e1", "havemos", "h\u00e3o", "houve", "houvemos", "houveram", "houvera", "houv\u00e9ramos", "haja", "hajamos", "hajam", "houvesse", "houv\u00e9ssemos", "houvessem", "houver", "houvermos", "houverem", "houverei", "houver\u00e1", "houveremos", "houver\u00e3o", "houveria", "houver\u00edamos", "houveriam", "sou", "somos", "s\u00e3o", "era", "\u00e9ramos", "eram", "fui", "foi", "fomos", "foram", "fora", "f\u00f4ramos", "seja", "sejamos", "sejam", "fosse", "f\u00f4ssemos", "fossem", "for", "formos", "forem", "serei", "ser\u00e1", "seremos", "ser\u00e3o", "seria", "ser\u00edamos", "seriam", "tenho", "tem", "temos", "t\u00e9m", "tinha", "t\u00ednhamos", "tinham", "tive", "teve", "tivemos", "tiveram", "tivera", "tiv\u00e9ramos", "tenha", "tenhamos", "tenham", "tivesse", "tiv\u00e9ssemos", "tivessem", "tiver", "tivermos", "tiverem", "terei", "ter\u00e1", "teremos", "ter\u00e3o", "teria", "ter\u00edamos", "teriam"],
"russian": ["\u0438", "\u0432", "\u0432\u043e", "\u043d\u0435", "\u0447\u0442\u043e", "\u043e\u043d", "\u043d\u0430", "\u044f", "\u0441", "\u0441\u043e", "\u043a\u0430\u043a", "\u0430", "\u0442\u043e", "\u0432\u0441\u0435", "\u043e\u043d\u0430", "\u0442\u0430\u043a", "\u0435\u0433\u043e", "\u043d\u043e", "\u0434\u0430", "\u0442\u044b", "\u043a", "\u0443", "\u0436\u0435", "\u0432\u044b", "\u0437\u0430", "\u0431\u044b", "\u043f\u043e", "\u0442\u043e\u043b\u044c\u043a\u043e", "\u0435\u0435", "\u043c\u043d\u0435", "\u0431\u044b\u043b\u043e", "\u0432\u043e\u0442", "\u043e\u0442", "\u043c\u0435\u043d\u044f", "\u0435\u0449\u0435", "\u043d\u0435\u0442", "\u043e", "\u0438\u0437", "\u0435\u043c\u0443", "\u0442\u0435\u043f\u0435\u0440\u044c", "\u043a\u043e\u0433\u0434\u0430", "\u0434\u0430\u0436\u0435", "\u043d\u0443", "\u0432\u0434\u0440\u0443\u0433", "\u043b\u0438", "\u0435\u0441\u043b\u0438", "\u0443\u0436\u0435", "\u0438\u043b\u0438", "\u043d\u0438", "\u0431\u044b\u0442\u044c", "\u0431\u044b\u043b", "\u043d\u0435\u0433\u043e", "\u0434\u043e", "\u0432\u0430\u0441", "\u043d\u0438\u0431\u0443\u0434\u044c", "\u043e\u043f\u044f\u0442\u044c", "\u0443\u0436", "\u0432\u0430\u043c", "\u0432\u0435\u0434\u044c", "\u0442\u0430\u043c", "\u043f\u043e\u0442\u043e\u043c", "\u0441\u0435\u0431\u044f", "\u043d\u0438\u0447\u0435\u0433\u043e", "\u0435\u0439", "\u043c\u043e\u0436\u0435\u0442", "\u043e\u043d\u0438", "\u0442\u0443\u0442", "\u0433\u0434\u0435", "\u0435\u0441\u0442\u044c", "\u043d\u0430\u0434\u043e", "\u043d\u0435\u0439", "\u0434\u043b\u044f", "\u043c\u044b", "\u0442\u0435\u0431\u044f", "\u0438\u0445", "\u0447\u0435\u043c", "\u0431\u044b\u043b\u0430", "\u0441\u0430\u043c", "\u0447\u0442\u043e\u0431", "\u0431\u0435\u0437", "\u0431\u0443\u0434\u0442\u043e", "\u0447\u0435\u0433\u043e", "\u0440\u0430\u0437", "\u0442\u043e\u0436\u0435", "\u0441\u0435\u0431\u0435", "\u043f\u043e\u0434", "\u0431\u0443\u0434\u0435\u0442", "\u0436", "\u0442\u043e\u0433\u0434\u0430", "\u043a\u0442\u043e", "\u044d\u0442\u043e\u0442", "\u0442\u043e\u0433\u043e", "\u043f\u043e\u0442\u043e\u043c\u0443", "\u044d\u0442\u043e\u0433\u043e", "\u043a\u0430\u043a\u043e\u0439", "\u0441\u043e\u0432\u0441\u0435\u043c", "\u043d\u0438\u043c", "\u0437\u0434\u0435\u0441\u044c", "\u044d\u0442\u043e\u043c", "\u043e\u0434\u0438\u043d", "\u043f\u043e\u0447\u0442\u0438", "\u043c\u043e\u0439", "\u0442\u0435\u043c", "\u0447\u0442\u043e\u0431\u044b", "\u043d\u0435\u0435", "\u0441\u0435\u0439\u0447\u0430\u0441", "\u0431\u044b\u043b\u0438", "\u043a\u0443\u0434\u0430", "\u0437\u0430\u0447\u0435\u043c", "\u0432\u0441\u0435\u0445", "\u043d\u0438\u043a\u043e\u0433\u0434\u0430", "\u043c\u043e\u0436\u043d\u043e", "\u043f\u0440\u0438", "\u043d\u0430\u043a\u043e\u043d\u0435\u0446", "\u0434\u0432\u0430", "\u043e\u0431", "\u0434\u0440\u0443\u0433\u043e\u0439", "\u0445\u043e\u0442\u044c", "\u043f\u043e\u0441\u043b\u0435", "\u043d\u0430\u0434", "\u0431\u043e\u043b\u044c\u0448\u0435", "\u0442\u043e\u0442", "\u0447\u0435\u0440\u0435\u0437", "\u044d\u0442\u0438", "\u043d\u0430\u0441", "\u043f\u0440\u043e", "\u0432\u0441\u0435\u0433\u043e", "\u043d\u0438\u0445", "\u043a\u0430\u043a\u0430\u044f", "\u043c\u043d\u043e\u0433\u043e", "\u0440\u0430\u0437\u0432\u0435", "\u0442\u0440\u0438", "\u044d\u0442\u0443", "\u043c\u043e\u044f", "\u0432\u043f\u0440\u043e\u0447\u0435\u043c", "\u0445\u043e\u0440\u043e\u0448\u043e", "\u0441\u0432\u043e\u044e", "\u044d\u0442\u043e\u0439", "\u043f\u0435\u0440\u0435\u0434", "\u0438\u043d\u043e\u0433\u0434\u0430", "\u043b\u0443\u0447\u0448\u0435", "\u0447\u0443\u0442\u044c", "\u0442\u043e\u043c", "\u043d\u0435\u043b\u044c\u0437\u044f", "\u0442\u0430\u043a\u043e\u0439", "\u0438\u043c", "\u0431\u043e\u043b\u0435\u0435", "\u0432\u0441\u0435\u0433\u0434\u0430", "\u043a\u043e\u043d\u0435\u0447\u043d\u043e", "\u0432\u0441\u044e", "\u043c\u0435\u0436\u0434\u0443"],
"spanish": ["de", "la", "que", "el", "en", "y", "a", "los", "del", "se", "las", "por", "un", "para", "con", "no", "una", "su", "al", "lo", "como", "m\u00e1s", "pero", "sus", "le", "ya", "o", "este", "s\u00ed", "porque", "esta", "entre", "cuando", "muy", "sin", "sobre", "tambi\u00e9n", "me", "hasta", "hay", "donde", "quien", "desde", "todo", "nos", "durante", "todos", "uno", "les", "ni", "contra", "otros", "ese", "eso", "ante", "ellos", "e", "esto", "m\u00ed", "antes", "algunos", "qu\u00e9", "unos", "yo", "otro", "otras", "otra", "\u00e9l", "tanto", "esa", "estos", "mucho", "quienes", "nada", "muchos", "cual", "poco", "ella", "estar", "estas", "algunas", "algo", "nosotros", "mi", "mis", "t\u00fa", "te", "ti", "tu", "tus", "ellas", "nosotras", "vosostros", "vosostras", "os", "m\u00edo", "m\u00eda", "m\u00edos", "m\u00edas", "tuyo", "tuya", "tuyos", "tuyas", "suyo", "suya", "suyos", "suyas", "nuestro", "nuestra", "nuestros", "nuestras", "vuestro", "vuestra", "vuestros", "vuestras", "esos", "esas", "estoy", "est\u00e1s", "est\u00e1", "estamos", "est\u00e1is", "est\u00e1n", "est\u00e9", "est\u00e9s", "estemos", "est\u00e9is", "est\u00e9n", "estar\u00e9", "estar\u00e1s", "estar\u00e1", "estaremos", "estar\u00e9is", "estar\u00e1n", "estar\u00eda", "estar\u00edas", "estar\u00edamos", "estar\u00edais", "estar\u00edan", "estaba", "estabas", "est\u00e1bamos", "estabais", "estaban", "estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron", "estuviera", "estuvieras", "estuvi\u00e9ramos", "estuvierais", "estuvieran", "estuviese", "estuvieses", "estuvi\u00e9semos", "estuvieseis", "estuviesen", "estando", "estado", "estada", "estados", "estadas", "estad", "he", "has", "ha", "hemos", "hab\u00e9is", "han", "haya", "hayas", "hayamos", "hay\u00e1is", "hayan", "habr\u00e9", "habr\u00e1s", "habr\u00e1", "habremos", "habr\u00e9is", "habr\u00e1n", "habr\u00eda", "habr\u00edas", "habr\u00edamos", "habr\u00edais", "habr\u00edan", "hab\u00eda", "hab\u00edas", "hab\u00edamos", "hab\u00edais", "hab\u00edan", "hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron", "hubiera", "hubieras", "hubi\u00e9ramos", "hubierais", "hubieran", "hubiese", "hubieses", "hubi\u00e9semos", "hubieseis", "hubiesen", "habiendo", "habido", "habida", "habidos", "habidas", "soy", "eres", "es", "somos", "sois", "son", "sea", "seas", "seamos", "se\u00e1is", "sean", "ser\u00e9", "ser\u00e1s", "ser\u00e1", "seremos", "ser\u00e9is", "ser\u00e1n", "ser\u00eda", "ser\u00edas", "ser\u00edamos", "ser\u00edais", "ser\u00edan", "era", "eras", "\u00e9ramos", "erais", "eran", "fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron", "fuera", "fueras", "fu\u00e9ramos", "fuerais", "fueran", "fuese", "fueses", "fu\u00e9semos", "fueseis", "fuesen", "sintiendo", "sentido", "sentida", "sentidos", "sentidas", "siente", "sentid", "tengo", "tienes", "tiene", "tenemos", "ten\u00e9is", "tienen", "tenga", "tengas", "tengamos", "teng\u00e1is", "tengan", "tendr\u00e9", "tendr\u00e1s", "tendr\u00e1", "tendremos", "tendr\u00e9is", "tendr\u00e1n", "tendr\u00eda", "tendr\u00edas", "tendr\u00edamos", "tendr\u00edais", "tendr\u00edan", "ten\u00eda", "ten\u00edas", "ten\u00edamos", "ten\u00edais", "ten\u00edan", "tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron", "tuviera", "tuvieras", "tuvi\u00e9ramos", "tuvierais", "tuvieran", "tuviese", "tuvieses", "tuvi\u00e9semos", "tuvieseis", "tuviesen", "teniendo", "tenido", "tenida", "tenidos", "tenidas", "tened"],
"swedish": ["och", "det", "att", "i", "en", "jag", "hon", "som", "han", "p\u00e5", "den", "med", "var", "sig", "f\u00f6r", "s\u00e5", "till", "\u00e4r", "men", "ett", "om", "hade", "de", "av", "icke", "mig", "du", "henne", "d\u00e5", "sin", "nu", "har", "inte", "hans", "honom", "skulle", "hennes", "d\u00e4r", "min", "man", "ej", "vid", "kunde", "n\u00e5got", "fr\u00e5n", "ut", "n\u00e4r", "efter", "upp", "vi", "dem", "vara", "vad", "\u00f6ver", "\u00e4n", "dig", "kan", "sina", "h\u00e4r", "ha", "mot", "alla", "under", "n\u00e5gon", "eller", "allt", "mycket", "sedan", "ju", "denna", "sj\u00e4lv", "detta", "\u00e5t", "utan", "varit", "hur", "ingen", "mitt", "ni", "bli", "blev", "oss", "din", "dessa", "n\u00e5gra", "deras", "blir", "mina", "samma", "vilken", "er", "s\u00e5dan", "v\u00e5r", "blivit", "dess", "inom", "mellan", "s\u00e5dant", "varf\u00f6r", "varje", "vilka", "ditt", "vem", "vilket", "sitta", "s\u00e5dana", "vart", "dina", "vars", "v\u00e5rt", "v\u00e5ra", "ert", "era", "vilkas"],
"turkish": ["acaba", "ama", "asl\u0131nda", "az", "baz\u0131", "belki", "biri", "birka\u00e7", "bir\u015fey", "biz", "bu", "\u00e7ok", "\u00e7\u00fcnk\u00fc", "da", "daha", "de", "defa", "diye", "e\u011fer", "en", "gibi", "hem", "hep", "hepsi", "her", "hi\u00e7", "i\u00e7in", "ile", "ise", "kez", "ki", "kim", "m\u0131", "mu", "m\u00fc", "nas\u0131l", "ne", "neden", "nerde", "nerede", "nereye", "ni\u00e7in", "niye", "o", "sanki", "\u015fey", "siz", "\u015fu", "t\u00fcm", "ve", "veya", "ya", "yani"],
"english": ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]}