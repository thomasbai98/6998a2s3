var checkout = {};

$(document).ready(function () {
    
    function search() {
        var tags = document.getElementById("tag2").value;
        var formattedTags = formatTags(tags);

        console.log(sdk.searchGet({ "q": formattedTags }, {}, {}));
    }
    function formatTags(tags) {
        var formattedTags = "";
        for (const tag of tags) {
            if (tag.trim().length != 0) {
                formattedTags += tag;
                formattedTags += ", ";
            }
        }
        formattedTags = formattedTags.slice(0, -2);
        return formattedTags
    }
    function upload() {
        var fullKey = document.getElementById("myFile").value;
        var tags = document.getElementById("tag1").value.split(" ");
        var formattedTags = formatTags(tags);
        var temp = fullKey.split("\\");
        var key = temp[temp.length - 1];
        var file = document.getElementById("myFile").files[0];

        //file.constructor = () => file;
        console.log(sdk.folderObjectPut({ "folder": "6998assignment2bucket2", "object": key, "x-amz-meta-customLabels": formattedTags }, new Bolb(file), {}));



            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            //reader.readAsBinaryString(file);
            reader.onload = function () {
                var result = reader.result;
                var base64result = result.split(',')[1];

                console.log(base64result);
                console.log(sdk.folderObjectPut({ "folder": "6998assignment2bucket2", "object": key, "x-amz-meta-customLabels": formattedTags }, result, {}));
            }
    }












 

  

});
