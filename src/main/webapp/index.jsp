<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title of the document</title>
        <script
                src="http://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous"></script>
    </head>

    <style>
        .container {
            height: auto;
        }

        #previewArea {
            width: 69%;
            float: right;
        }

        #layoutArea {
            float: left;
            width: 30%;
        }​​
    </style>

<body>
    <div class="container">
        <div id="layoutArea">
            <div class="layout">
                <span>X : </span><input type="text" class="x" style="width: 13%;" placeholder="X"/>
                <span>Y : </span><input type="text" class="y" style="width: 13%;" placeholder="Y"/>
                <span>Width : </span><input type="text" class="width" style="width: 13%;" placeholder="Width" />
                <span>Height : </span><input type="text" class="height" style="width: 13%;" placeholder="Height" />
                <button id="addLayoutBtn"> add </button>
            </div>
        </div>

        <div id="previewArea">
            <canvas id="canvas" width="1200" height="2000"></canvas>
        </div>
    </div>
</body>

<script type="module" src="./js/manager/class/TemplateManager.js"></script>
</html>
