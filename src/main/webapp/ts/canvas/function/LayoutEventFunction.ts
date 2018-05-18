// Layout functions..
// fl = function layout

// layout
import {Layout} from "../../layout/Layout.js";
import {SubLayout} from "../../layout/SubLayout.js";
import {Color} from "../../renderer/class/Color.js";

export const flBindAddEvent = (callback: Function): void => {
    $('#layoutArrangementContainer').find('.addLayoutBtn').bind('click', (event) => {
        flAfterBindAddEvent(callback, $(event.target).parent().parent());
    });

    $('#subLayoutArrangementContainer').find('.addLayoutBtn').bind('click', (event) => {
        flAfterBindAddEvent(callback, $(event.target).parent().parent());
    });
};

const flAddLayout = (element: JQuery): void => {
    let index = flCreateIndex();
    flSetAddLayout(index, element);
};

const flSetAddLayout = (index: number, element: JQuery): void => {
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

    if(flIsSubLayoutElement(element)) {
        element.parent().parent().parent().find('.subInformation').last().append(clone);

    } else {
        element.parent().parent().parent().find('.information').last().append(clone);
    }
    flSetAddLayoutStyle(element);
};

const flSetAddLayoutStyle = (element: JQuery): void => {
    // set indexing
    element.attr('indexing', )
    element.find('.addLayoutBtn').css('display', 'none');
    element.find('.removeLayoutBtn').css('display', '');
    element.find('.modifyLayoutBtn').css('display', '');
};

export const flBindRemoveEvent = (callback: Function): void => {
    $('#layoutArrangementContainer').find('.removeLayoutBtn').bind('click', (event) => {
        flAfterRemoveEvent(callback, $(event.target).parent().parent(), $(event.target).parent().parent().attr('key'));
    });

    $('#subLayoutArrangementContainer').find('.removeLayoutBtn').bind('click', (event) => {
        flAfterRemoveEvent(callback, $(event.target).parent().parent(), $(event.target).parent().parent().attr('key'));
    });
};

export const flRemoveLayout = (element: JQuery): void => {
    flSetRemoveLayout(element);
};

const flSetRemoveLayout = (element: JQuery): void => {
    element.remove();
};

export const flBindModifyEvent = (callback: Function): void => {
    $('#layoutArrangementContainer').find('.modifyLayoutBtn').bind('click', (event) => {
        flAfterModifyEvent(callback, $(event.target).parent().parent());
    });

    $('#subLayoutArrangementContainer').find('.modifyLayoutBtn').bind('click', (event) => {
        flAfterModifyEvent(callback, $(event.target).parent().parent());
    });
};

export const flGetAddLayoutInformation = (element: JQuery): Layout => {
    return flGetLayoutInformation(element);
};

export const flGetModifyLayoutInformation = (element: JQuery): Layout => {
    return flGetLayoutInformation(element);
};

export const flCreateKey = (element: JQuery, key: string) => {
    element.attr('key', key);
};

const flGetLayoutInformation = (element: JQuery): Layout => {
    let x = Number(element.find('#x').val());
    let y = Number(element.find('#y').val());
    let width = Number(element.find('#width').val());
    let height = Number(element.find('#height').val());

    if(flIsSubLayoutElement(element)) {
        return new SubLayout(x, y, width, height, Color.SUBLAYOUT);

    } else {
        return new Layout(x, y, width, height, Color.LAYOUT);
    }
};

const flGetIndex = (element: JQuery): number => {
    return Number(element.attr('index'));
};

const flAfterBindAddEvent = (callback: Function, element: JQuery) => {
    flAddLayout(element);
    callback.apply(callback, [element]);
};

const flAfterRemoveEvent = (callback: Function, element: JQuery, key: string) => {
    callback.apply(callback, [element, key]);
};

const flAfterModifyEvent = (callback: Function, element: JQuery) => {
    let index = flGetIndex(element);
    callback.apply(callback, [index, element]);
};

const flIsSubLayoutElement = (element: JQuery) => {
    if(element.parent().parent().parent().attr('id').toLowerCase().indexOf('sub') > -1) {
        return true;

    } else {
        return false;
    }
};

const flCreateIndex = () => {
    let lastLayoutElement = $('#layoutArrangementContainer').find('.row').last().clone();
    let lastSubLayoutElement = $('#subLayoutArrangementContainer').find('.row').last().clone();

    if( (typeof lastLayoutElement.attr('index') == 'undefined') &&
        (typeof lastSubLayoutElement.attr('index') == 'undefined')) {

        return 0;

    } else if( (typeof lastLayoutElement.attr('index') != 'undefined') &&
        (typeof lastSubLayoutElement.attr('index') == 'undefined')) {

        return Number(lastLayoutElement.attr('index')) + 1;

    } else if( (typeof lastLayoutElement.attr('index') == 'undefined') &&
        (typeof lastSubLayoutElement.attr('index') != 'undefined')) {

        return Number(lastSubLayoutElement.attr('index')) + 1;

    } else {
        if(Number(lastLayoutElement.attr('index')) > Number(lastSubLayoutElement.attr('index'))) {
            return Number(lastLayoutElement.attr('index')) + 1;

        } else {
            return Number(lastSubLayoutElement.attr('index')) + 1;
        }
    }
};