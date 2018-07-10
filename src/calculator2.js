let Calculator2Layer = cc.Layer.extend({
    rects: new Array(10),
    formula: "",
    ctor: function () {

        this._super();

        this.setUpmymouse(this);
        this.initLayout();
        return true;
    },

    initLayout: function () {
        this.no0 = new cc.Sprite(res.no0_png);
        this.no0.x = cc.winSize.width * 3 / 7;
        this.no0.y = cc.winSize.height * 2 / 8;
        this.no0Rect = new cc.Rect(
            this.no0.x - this.no0.width / 2,
            this.no0.y - this.no0.height / 2,
            this.no0.width,
            this.no0.height
        );
        this.addChild(this.no0);

        this.no1 = new cc.Sprite(res.no1_png);
        this.no1.x = cc.winSize.width * 2 / 7;
        this.no1.y = cc.winSize.height * 3 / 8;
        this.no1Rect = new cc.Rect(
            this.no1.x - this.no1.width / 2,
            this.no1.y - this.no1.height / 2,
            this.no1.width,
            this.no1.height
        );
        this.addChild(this.no1);

        this.no2 = new cc.Sprite(res.no2_png);
        this.no2.x = cc.winSize.width * 3 / 7;
        this.no2.y = cc.winSize.height * 3 / 8;
        this.no2Rect = new cc.Rect(
            this.no2.x - this.no2.width / 2,
            this.no2.y - this.no2.height / 2,
            this.no2.width,
            this.no2.height
        );
        this.addChild(this.no2);

        this.no3 = new cc.Sprite(res.no3_png);
        this.no3.x = cc.winSize.width * 4 / 7;
        this.no3.y = cc.winSize.height * 3 / 8;
        this.no3Rect = new cc.Rect(
            this.no3.x - this.no3.width / 2,
            this.no3.y - this.no3.height / 2,
            this.no3.width,
            this.no3.height
        );
        this.addChild(this.no3);

        this.no4 = new cc.Sprite(res.no4_png);
        this.no4.x = cc.winSize.width * 2 / 7;
        this.no4.y = cc.winSize.height * 4 / 8;
        this.no4Rect = new cc.Rect(
            this.no4.x - this.no4.width / 2,
            this.no4.y - this.no4.height / 2,
            this.no4.width,
            this.no4.height
        );
        this.addChild(this.no4);

        this.no5 = new cc.Sprite(res.no5_png);
        this.no5.x = cc.winSize.width * 3 / 7;
        this.no5.y = cc.winSize.height * 4 / 8;
        this.no5Rect = new cc.Rect(
            this.no5.x - this.no5.width / 2,
            this.no5.y - this.no5.height / 2,
            this.no5.width,
            this.no5.height
        );
        this.addChild(this.no5);

        this.no6 = new cc.Sprite(res.no6_png);
        this.no6.x = cc.winSize.width * 4 / 7;
        this.no6.y = cc.winSize.height * 4 / 8;
        this.no6Rect = new cc.Rect(
            this.no6.x - this.no6.width / 2,
            this.no6.y - this.no6.height / 2,
            this.no6.width,
            this.no6.height
        );
        this.addChild(this.no6);

        this.no7 = new cc.Sprite(res.no7_png);
        this.no7.x = cc.winSize.width * 2 / 7;
        this.no7.y = cc.winSize.height * 5 / 8;
        this.no7Rect = new cc.Rect(
            this.no7.x - this.no7.width / 2,
            this.no7.y - this.no7.height / 2,
            this.no7.width,
            this.no7.height
        );
        this.addChild(this.no7);

        this.no8 = new cc.Sprite(res.no8_png);
        this.no8.x = cc.winSize.width * 3 / 7;
        this.no8.y = cc.winSize.height * 5 / 8;
        this.no8Rect = new cc.Rect(
            this.no8.x - this.no8.width / 2,
            this.no8.y - this.no8.height / 2,
            this.no8.width,
            this.no8.height
        );
        this.addChild(this.no8);

        this.no9 = new cc.Sprite(res.no9_png);
        this.no9.x = cc.winSize.width * 4 / 7;
        this.no9.y = cc.winSize.height * 5 / 8;
        this.no9Rect = new cc.Rect(
            this.no9.x - this.no9.width / 2,
            this.no9.y - this.no9.height / 2,
            this.no9.width,
            this.no9.height
        );
        this.addChild(this.no9);

        this.equal = new cc.Sprite(res.equal_png);
        this.equal.x = cc.winSize.width * 4 / 7;
        this.equal.y = cc.winSize.height * 2 / 8;
        this.equalRect = new cc.Rect(
            this.equal.x - this.equal.width / 2,
            this.equal.y - this.equal.height / 2,
            this.equal.width,
            this.equal.height
        );
        this.addChild(this.equal);


        this.divis = new cc.Sprite(res.divis_png);
        this.divis.x = cc.winSize.width * 5 / 7;
        this.divis.y = cc.winSize.height * 5 / 8;
        this.divisRect = new cc.Rect(
            this.divis.x - this.divis.width / 2,
            this.divis.y - this.divis.height / 2,
            this.divis.width,
            this.divis.height
        );
        this.addChild(this.divis);

        this.close = new cc.Sprite(res.close_png);
        this.close.x = cc.winSize.width * 5 / 7;
        this.close.y = cc.winSize.height * 4 / 8;
        this.closeRect = new cc.Rect(
            this.close.x - this.close.width / 2,
            this.close.y - this.close.height / 2,
            this.close.width,
            this.close.height
        );
        this.addChild(this.close);

        this.minus = new cc.Sprite(res.minus_png);
        this.minus.x = cc.winSize.width * 5 / 7;
        this.minus.y = cc.winSize.height * 3 / 8;
        this.minusRect = new cc.Rect(
            this.minus.x - this.minus.width / 2,
            this.minus.y - this.minus.height / 2,
            this.minus.width,
            this.minus.height
        );
        this.addChild(this.minus);

        this.plus = new cc.Sprite(res.plus_png);
        this.plus.x = cc.winSize.width * 5 / 7;
        this.plus.y = cc.winSize.height * 2 / 8;
        this.plusRect = new cc.Rect(
            this.plus.x - this.plus.width / 2,
            this.plus.y - this.plus.height / 2,
            this.plus.width,
            this.plus.height
        );
        this.addChild(this.plus);

        this.cbutton = new cc.Sprite(res.c_png);
        this.cbutton.x = cc.winSize.width * 2 / 7;
        this.cbutton.y = cc.winSize.height * 2 / 8;
        this.cbuttonRect = new cc.Rect(
            this.cbutton.x - this.cbutton.width / 2,
            this.cbutton.y - this.cbutton.height / 2,
            this.cbutton.width,
            this.cbutton.height
        );
        this.addChild(this.cbutton);

        this.back = new cc.Sprite(res.back_png);
        this.back.x = cc.winSize.width * 6 / 7;
        this.back.y = cc.winSize.height * 2 / 8;
        this.backRect = new cc.Rect(
            this.back.x - this.back.width / 2,
            this.back.y - this.back.height / 2,
            this.back.width,
            this.back.height
        );
        this.addChild(this.back);

        this.input = new cc.LabelTTF("", "", 48);
        this.input.x = cc.winSize.width * 3 / 6;
        this.input.y = cc.winSize.height * 6 / 8;
        this.addChild(this.input);

        this.rects = [this.no0Rect, this.no1Rect, this.no2Rect, this.no3Rect, this.no4Rect, this.no5Rect,
            this.no6Rect, this.no7Rect, this.no8Rect, this.no9Rect];


    },

    setUpmymouse: function (layer) {
        if ('mouse' in cc.sys.capabilities) {
            // define listener object
            let mouseListener = {
                event: cc.EventListener.MOUSE,
                onMouseDown: function (event) {
                    let x = event.getLocationX();
                    let y = event.getLocationY();
                    let point = new cc.Point(x, y);
                    let temp = 0;
                    let strOper = 0;

                    let inputIsNum = function (str) {
                        if (strOper == null) {
                            layer.formula = str;
                            layer.input.setString(layer.formula);
                            strOper = 0;
                            return;
                        }

                        if (layer.input === 0) {
                            layer.formula = str;
                            layer.input.setString(layer.formula);

                        } else {
                            layer.formula += str;
                            layer.input.setString(layer.formula);

                        }
                    };

                    let operator = function (str) {
                        //不按等號的連續運算

                        equal();
                        valueA = layer.formula;
                        strOper = str;
                        layer.formula += str;
                    };

                    let equal = function () {
                        switch (strOper) {
                            case '+':
                                layer.formula = parseFloat(valueA) + parseFloat(layer.formula);
                                break;
                            case '-':
                                layer.formula = parseFloat(valueA) - parseFloat(layer.formula);
                                break;
                            case '*':
                                layer.formula = parseFloat(valueA) * parseFloat(layer.formula);
                                break;
                            case '/':
                                layer.formula = parseFloat(valueA) / parseFloat(layer.formula);

                                break;
                            default:
                                break;
                        }
                        layer.formula = eval(layer.formula);

                        temp = null;
                        strOper = null;
                    };

                    // back
                    if (cc.rectContainsPoint(layer.backRect, point)) {
                        layer.formula = layer.formula.substr(0, layer.formula.length - 1);
                        layer.input.setString(layer.formula);
                    }
                    //all clear
                    if (cc.rectContainsPoint(layer.cbuttonRect, point)) {
                        layer.formula = "";
                        layer.input.setString(layer.formula);
                    }
                    //add
                    if (cc.rectContainsPoint(layer.plusRect, point)) {
                        operator("+");
                        layer.input.setString(layer.formula);
                    }

                    //minus
                    if (cc.rectContainsPoint(layer.minusRect, point)) {
                        operator("-");
                        layer.input.setString(layer.formula);
                    }

                    //close
                    if (cc.rectContainsPoint(layer.closeRect, point)) {
                        operator("*");
                        layer.input.setString(layer.formula);
                    }

                    //divis
                    if (cc.rectContainsPoint(layer.divisRect, point)) {
                        operator("/");
                        layer.input.setString(layer.formula);
                    }

                    //equal
                    if (cc.rectContainsPoint(layer.equalRect, point)) {
                        equal();
                        layer.input.setString(layer.formula);
                    }


                    // number
                    if(strOper !== null){
                        for (let i = 0; i < layer.rects.length; i++) {
                            if (cc.rectContainsPoint(layer.rects[i], point)) {
                                inputIsNum(i);
                                break;
                            }
                        }
                    }



                }
            };
            cc.eventManager.addListener(mouseListener, this);
        }
    }


});

let Calculator2Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new Calculator2Layer();
        this.addChild(layer);
    }
});

