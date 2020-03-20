const prompts = require('prompts');
const fs = require('fs-extra');

(async () => {

    setTimeout(async () => {

        let favoritesList = await prompts({
            type: 'text',
            name: 'value',
            message: 'Please paste your list of favorite photos as a JSON string:'
        });

        let filenameList = JSON.parse(favoritesList.value);

        console.log(filenameList.length + ' files favorited');

        console.log('writing files...');

        filenameList.forEach((f, index) => {
            const xmpFilename = f.split('.')[0] + '.XMP';
            fs.writeFile(xmpFilename, `<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="XMP Core 5.1.2">
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
        <rdf:Description rdf:about=""
        xmlns:xmp="http://ns.adobe.com/xap/1.0/"
        xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
        xmlns:photomechanic="http://ns.camerabits.com/photomechanic/1.0/"
        xmlns:aux="http://ns.adobe.com/exif/1.0/aux/"
        xmp:CreatorTool="NIKON D750 Ver.1.12     "
        xmp:CreateDate="2019-11-16T12:05:34.13"
        xmp:Rating="0"
        photoshop:DateCreated="2019-11-16T12:05:34.13"
        photomechanic:ColorClass="0"
        photomechanic:Tagged="True"
        photomechanic:Prefs="1:0:0:000001"
        photomechanic:PMVersion="PM5"
        aux:ImageNumber="1"/>
    </rdf:RDF>
</x:xmpmeta>`);
        })


    }, 1000);

})();