FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
    );

FilePond.create(document.querySelector('input'));

FilePond.parse(document.body);