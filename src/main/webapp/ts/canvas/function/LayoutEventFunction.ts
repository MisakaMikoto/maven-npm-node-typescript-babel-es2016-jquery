// Layout functions..
// fl = function layout

import {Layout} from "../../layout/Layout.js";

// layout events
export const flBindAddEvent = (callback: Function) => {
    $('.addLayoutBtn').bind('click', (event) => {
        let element = $(event.target).parent().parent();

        flAddLayout(element);
        callback.apply(callback, [element]);
    });
};

const flAddLayout = (element: JQuery) => {
    flSetAddLayout(element);
};

const flSetAddLayout = (element: JQuery) => {
    let clone = element.clone(true, true);
    clone.find('input').each((index, element) => {
        $(element).val('');
        $(element).text('');
    });
    $('#layoutArrangementContainer').find('.information').last().append(clone);
    flSetAddLayoutStyle(element)
};

const flSetAddLayoutStyle = (element: JQuery) => {
    element.find('.addLayoutBtn').css('display', 'none');
    element.find('.removeLayoutBtn').css('display', '');
    element.find('.modifyLayoutBtn').css('display', '');
};

export const flBindRemoveEvent = (callback: Function) => {
    $('.removeLayoutBtn').bind('click', (event) => {
        let element = $(event.target).parent().parent();
        let index = getIndex(element);

        flRemoveLayout(element);
        callback.apply(callback, [index]);
    });
};

const flRemoveLayout = (element: JQuery) => {
    flSetRemoveLayout(element);
};

const flSetRemoveLayout = (element: JQuery) => {
    element.remove();
};

export const flBindModifyEvent = (callback: Function) => {
    $('.modifyLayoutBtn').bind('click', (event) => {
        let element = $(event.target).parent().parent();
        let index = getIndex(element);

        callback.apply(callback, [index, element]);
    });
};

export const flGetAddLayoutInformation = (element: JQuery): Layout => {
    return getLayoutInformation(element);
};

export const flGetModifyLayoutInformation = (element: JQuery): Layout => {
    return getLayoutInformation(element);
};

const getLayoutInformation = (element: JQuery): Layout => {
    let x = <number> element.find('#x').val();
    let y = <number> element.find('#y').val();
    let width = <number> element.find('#width').val();
    let height = <number> element.find('#height').val();

    return new Layout(x, y, width, height);
};

const getIndex = (eventTargetElement: JQuery) => {
    return $('.layout').find('.information').children().index(eventTargetElement);
};