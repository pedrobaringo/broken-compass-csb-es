Hooks.once("init", function() {
    console.log("Incializando módulo Broken Compass")

    game.settings.register("broken-compass-csb-es", "firstTimeStart", {
        name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
	game.settings.register("broken-compass-csb-es", "ambientacion", {
        name: "Ambientación",
        hint: "Selecciona que ambientación quieres usar para el diseño de las fichas.",
        scope: "world",
        config: true,
		requiresReload: true,
		type: String,
		choices: {
			"1999": "1999",
			"1936": "Edad Dorada",
			"piratas": "Jolly Roger",
			"verne": "Voyages Extraordinaires"
		},
		default: "1999",
		onChange: value => {
			if (value=="1999") {
				console.log(value);
				game.settings.set("custom-system-builder", "customStyle", "modules/broken-compass-csb-es/assets/1999.css");
			} else if (value=="1936") {
				console.log(value);
				game.settings.set("custom-system-builder", "customStyle", "modules/broken-compass-csb-es/assets/EdadDorada.css");
			} else if (value=="piratas") {
				console.log(value);
				game.settings.set("custom-system-builder", "customStyle", "modules/broken-compass-csb-es/assets/JollyRogers.css");
			} else if (value=="verne") {
				console.log(value);
				game.settings.set("custom-system-builder", "customStyle", "modules/broken-compass-csb-es/assets/VoyagesExtraordinaires.css");
			}
		}
	})
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Bienvenido al módulo de Broken Compass</h1>';
	let mensimpfirst='<p>Importa los compendios para poder empezar a usar el módulo</p><button id='+buttonId2+' >Importa los compendios</button>';
	let mensimpact='<p>Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' >Importa los compendios</button>'
	let mensrecordtut='<p>Recuerda: Puedes seleccionar un Campo distinto o añadir dados de bonificación o penalización, si pulsas la tecla Mayus al hacer click en la Habilidad.</p><button id='+buttonId+' >Ve al Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("broken-compass-csb-es", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("broken-compass-csb-es").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("broken-compass-csb-es", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Broken Compass"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/broken-compass-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("broken-compass-csb-es.object-templates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("broken-compass-csb-es.actortemplates");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
							let collection3 = game.packs.get("broken-compass-csb-es.macrosbc");
							let folderident3=''
							if (game.folders.getName("Macros BC")) {
								folderident3=game.folders.getName("Macros BC").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros BC", keepId: true});
						}, 500);
						game.user.setFlag("broken-compass-csb-es", "welcomeMessage", true);
						game.user.setFlag("broken-compass-csb-es", "lastVersion", game.modules.get("broken-compass-csb-es").version);
					});
				}
				}, 100);
			});
			game.settings.set("broken-compass-csb-es", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("broken-compass-csb-es", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Broken Compass"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/broken-compass-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("broken-compass-csb-es.object-templates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("broken-compass-csb-es.actortemplates");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
							let collection3 = game.packs.get("broken-compass-csb-es.macrosbc");
							let folderident3=''
							if (game.folders.getName("Macros BC")) {
								folderident3=game.folders.getName("Macros BC").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros BC", keepId: true});
						}, 500);
						game.user.setFlag("broken-compass-csb-es", "lastVersion", game.modules.get("broken-compass-csb-es").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("broken-compass-csb-es", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Broken Compass"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/broken-compass-csb-es');
				});
			}
			}, 100);
		});
		game.user.setFlag("broken-compass-csb-es", "welcomeMessage", true);
		game.settings.set("broken-compass-csb-es", "firstTimeStart", false);
	}
})