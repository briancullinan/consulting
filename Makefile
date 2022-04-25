
.DEFAULT_GOAL      := landing


define DO_EMBED_CC
	node -e " \
	const {readFileSync: rfs, writeFileSync: wfs} = require('fs'); \
	wfs('$1', rfs('$1').toString('utf-8').replace( \
	/<link[^>]*>/, '<style>'+rfs('$2')+'</style>').replace( \
	/<script[^>]*>/, '<script>'+rfs('$3')+'</script>').replace( \
	/<img[^>]*>/, '<img id="banner" src=\"data:image/png;base64,'+rfs('$4', 'base64')+ '\" />'))"

endef


landing: copy-html embed-cc

embed-cc:
	$(call DO_EMBED_CC,build/index.html,index.css,index.js,index_matrix.jpg)

copy-html:
	@if [ ! -d "./build" ]; \
		then mkdir "./build";fi;
	cp -r -f index.html build/index.html

