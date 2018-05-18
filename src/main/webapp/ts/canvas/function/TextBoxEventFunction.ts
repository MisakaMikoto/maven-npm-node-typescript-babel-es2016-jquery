// textbox functions..
// ft = function textbox

import {TextBox} from "../../layout/TextBox.js";
import {Color} from "../../renderer/class/Color.js";
import {Layout} from "../../layout/Layout";

export const ftBindAddEvent = (callback: Function): void => {
    $('#textBoxContainer').find('.addLayoutBtn').bind('click', (event) => {
        let element = $(event.target).parent().parent();

        ftAddLayout(element);
        callback.apply(callback, [element]);
    });
};

const ftAddLayout = (element: JQuery): void => {
    let index = ftCreateIndex();
    ftSetAddLayout(index, element);
};

const ftSetAddLayout = (index: number, element: JQuery): void => {
    let clone = element.clone(true, true);

    if(typeof element.attr('index') == 'undefined') {
        element.attr('index', index);
        clone.attr('index', index + 1);

    } else {
        clone.attr('index', index);
    }
    clone.find('input').each((index, element) => {
        $(element).val('');
        $(element).text('');
    });
    element.parent().parent().parent().find('.textBoxInformation').last().append(clone);
    ftSetAddLayoutStyle(element)
};

const ftSetAddLayoutStyle = (element: JQuery): void => {
    element.find('.addLayoutBtn').css('display', 'none');
    element.find('.removeLayoutBtn').css('display', '');
    element.find('.modifyLayoutBtn').css('display', '');
};

export const ftBindRemoveEvent = (callback: Function): void => {
    $('#textBoxContainer').find('.removeLayoutBtn').bind('click', (event) => {
        let element = $(event.target).parent().parent();
        let key = $(event.target).parent().parent().attr('key');
        callback.apply(callback, [element, key]);
    });
};

export const ftRemoveLayout = (element: JQuery): void => {
    ftSetRemoveLayout(element);
};

const ftSetRemoveLayout = (element: JQuery): void => {
    element.remove();
};

export const ftBindModifyEvent = (callback: Function): void => {
    $('#textBoxContainer').find('.modifyLayoutBtn').bind('click', (event) => {
        let element = $(event.target).parent().parent();
        let index = ftGetIndex(element);

        callback.apply(callback, [index, element]);
    });
};

export const ftGetAddLayoutInformation = (element: JQuery): TextBox => {
    return ftGetLayoutInformation(element);
};

export const ftGetRemoveLayoutInformation = (element: JQuery): Layout => {
    return ftGetLayoutInformation(element);
};

export const ftGetModifyLayoutInformation = (element: JQuery): TextBox => {
    return ftGetLayoutInformation(element);
};

const ftGetLayoutInformation = (element: JQuery): TextBox => {
    let x = Number(element.find('#x').val());
    let y = Number(element.find('#y').val());
    let width = Number(element.find('#width').val());
    let height = Number(element.find('#height').val());

    return new TextBox(x, y, width, height, Color.TEXTBOX);
};

const ftGetIndex = (eventTargetElement: JQuery): number => {
    return $('#textBoxContainer').find('.layout').find('.information').children().index(eventTargetElement);
};

const ftCreateIndex = () => {
    let textBoxLayoutElement = $('#textBoxContainer').find('.row').last().clone();

    if(typeof textBoxLayoutElement.attr('index') == 'undefined') {
        return 0;

    } else {
        return Number(textBoxLayoutElement.attr('index') + 1);
    }
};