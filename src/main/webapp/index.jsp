<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title of the document</title>
        <script
                src="http://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.2.4/fabric.js"></script>
    </head>

    <style>
        .container {
            width: 100%;
            height: auto;
        }

        #previewContainer {
            width: 70%;
            float: right;
        }
    </style>

<body>
    <div class="container">
        <div id="tabs">
            <ul class="nav nav-tabs">
                <li><a name="sectionContainer" href="#">섹션 생성</a></li>
                <li><a name="subSectionContainer" href="#">하위 섹션 생성</a></li>
                <li class="active"><a name="layoutArrangementContainer" href="#">상위 레이아웃 영역 생성</a></li>
                <li><a name="subLayoutArrangementContainer" href="#">하위 레이아웃 영역 생성</a></li>
                <li><a name="textBoxContainer" href="#">텍스트 박스 생성</a></li>
                <li><a name="imageContainer" href="#">이미지 영역 생성</a></li>
            </ul>

            <div id="previewContainer" style="width: 59%; margin-left: 10px;">
                <canvas id="canvas" width="1380" height="2000" style="border:1px solid #000000;"></canvas>
            </div>

            <div class="tab-content" style="width: 40%;">
                <div id="sectionContainer" style="display: none;">
                    v
                </div>
                <div id="subSectionContainer" style="display: none;">
                    s
                </div>
                <div id="layoutArrangementContainer" class="tab-pane fade in active" style="margin-top: 10px;">
                    <div class="layout" style="margin-bottom: 10px;">
                        <div>
                            <span>섹션 선택</span>
                            <select class="form-control">
                                <option value="1">기본정보</option>
                                <option value="3">템플릿선택</option>
                                <option value="4">인트로</option>
                                <option value="5">옵션</option>
                                <option value="6">중요마케팅</option>
                                <option value="7">옵션상세</option>
                                <option value="8">옵션외정보</option>
                                <option value="9">배너(460)</option>
                                <option value="10">배너(580)</option>
                            </select>

                            <span>하위 섹션 선택</span>
                            <select class="form-control">
                                <option value="1">기본정보</option>
                            </select>
                        </div>

                        <div style="margin-top: 10px;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Name</span>
                                    <input type="text" name="name" class="form-control" aria-label="name" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Desc</span>
                                    <input type="text" name="desc" class="form-control" aria-label="desc" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Type</span>
                                    <input type="text" name="type" class="form-control" aria-label="type" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>
                        </div>

                        <div class="information" style="margin-top: 10px;">
                            <div class="form-group row" style="height: 100px;">
                                <div class="col-xs-2">
                                    <label for="x">X</label>
                                    <input class="form-control" id="x" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="y">Y</label>
                                    <input class="form-control" id="y" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="width">Width</label>
                                    <input class="form-control" id="width" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="height">Height</label>
                                    <input class="form-control" id="height" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="height">MarginBottom</label>
                                    <input class="form-control" id="marginBottom" type="text">
                                </div>

                                <div class="col-xs-1" style="margin-left: 25px; margin-top: 25px;">
                                    <button class="addLayoutBtn"> add </button>
                                    <button class="removeLayoutBtn" style="display: none"> remove </button>
                                    <button class="modifyLayoutBtn" style="display: none"> modify </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="subLayoutArrangementContainer" style="display: none;">
                    <div class="layout">
                        <div style="margin-top: 10px;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Name</span>
                                    <input type="text" name="name" class="form-control" aria-label="name" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Desc</span>
                                    <input type="text" name="desc" class="form-control" aria-label="desc" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Type</span>
                                    <input type="text" name="type" class="form-control" aria-label="type" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>
                        </div>

                        <div class="subInformation" style="margin-top: 10px;">
                            <div class="form-group row" style="height: 100px;">
                                <div class="col-xs-2">
                                    <label for="x">X</label>
                                    <input class="form-control" id="x" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="y">Y</label>
                                    <input class="form-control" id="y" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="width">Width</label>
                                    <input class="form-control" id="width" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="height">Height</label>
                                    <input class="form-control" id="height" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="height">MarginBottom</label>
                                    <input class="form-control" id="marginBottom" type="text">
                                </div>

                                <div class="col-xs-1" style="margin-left: 25px; margin-top: 25px;">
                                    <button class="addLayoutBtn"> add </button>
                                    <button class="removeLayoutBtn" style="display: none"> remove </button>
                                    <button class="modifyLayoutBtn" style="display: none"> modify </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="textBoxContainer" style="display: none;">
                    <div class="layout">
                        <div style="margin-top: 10px;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Name</span>
                                    <input type="text" name="name" class="form-control" aria-label="name" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Desc</span>
                                    <input type="text" name="desc" class="form-control" aria-label="desc" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Type</span>
                                    <input type="text" name="type" class="form-control" aria-label="type" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </div>
                        </div>

                        <div class="textBoxInformation" style="margin-top: 10px;">
                            <div class="form-group row" style="height: 100px;">
                                <div class="col-xs-2">
                                    <label for="x">X</label>
                                    <input class="form-control" id="x" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="y">Y</label>
                                    <input class="form-control" id="y" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="width">Width</label>
                                    <input class="form-control" id="width" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="height">Height</label>
                                    <input class="form-control" id="height" type="text">
                                </div>
                                <div class="col-xs-2">
                                    <label for="height">MarginBottom</label>
                                    <input class="form-control" id="marginBottom" type="text">
                                </div>

                                <div class="col-xs-1" style="margin-left: 25px; margin-top: 25px;">
                                    <button class="addLayoutBtn"> add </button>
                                    <button class="removeLayoutBtn" style="display: none"> remove </button>
                                    <button class="modifyLayoutBtn" style="display: none"> modify </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="imageContainer" style="display: none;">
                    iiiii
                </div>
            </div>
        </div>
        <button class="saveBtn"> Save </button>
    </div>
</body>
    <script src="./js/canvas/class/CanvasFabricManager.js"></script>
    <script type="module">
        import {Canvas} from "./js/canvas/class/Canvas.js";
        new Canvas();
    </script>
</html>
