CKEDITOR.on('instanceCreated', function( event ) {
	var editor = event.editor,
	element = editor.element;

	editor.on( 'configLoaded', function() {
			
		this.config.toolbar_full = [
			{items: ['Format']},
			{items: ['Undo','Redo']},
			{items: ['Cut','Copy','Paste','PasteText','PasteFromWord']},
			{items: ['ShowBlocks']},
			'/',
			{items: ['Bold','Italic','Underline','RemoveFormat']},
			{items: ['NumberedList','BulletedList','Outdent','Indent','Blockquote']},
			{items: ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock']},
			{items: [ 'Link', 'Unlink']}
		];

		this.config.format_tags = 'p;h1;h2;h3;pre';

	});

});