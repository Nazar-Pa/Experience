//import * as FilePond from 'filepond';
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
    )



FilePond.parse(document.body);

// FilePond.create(document.querySelector('input'));