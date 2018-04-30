// Layout functions..
// fl = function layout

export const flBindClickAddEvent = (callback: Function) => {
    $('#addLayoutBtn').bind('click', () => {
        flAddLayout();
        callback();
    });
};

const flAddLayout = () => {
    flSetAddLayout();
};

const flRemoveLayout = (target: JQuery) => {
    flSetRemoveLayout(target);
};

const flBindClickRemoveEvent = (target: JQuery) => {
    $(target).bind('click', () => {
        flRemoveLayout(target);
    });
};

const flSetAddLayout = () => {
    let clone = $('.layout').last().clone();
    clone.find('button').removeAttr('id');
    clone.find('button').attr('class', 'removeLayoutBtn');
    clone.find('button').text('remove');
    $('#layoutArea').prepend(clone);
    flBindClickRemoveEvent(clone);
};

const flSetRemoveLayout = (target: JQuery) => {
    $(target).remove();
};

export const flGetLayoutInformation = () => {
    let currentLayout = $('.layout').last();

    let x = <string> currentLayout.find('.x').val();
    let y = <string> currentLayout.find('.y').val();
    let width = <string> currentLayout.find('.width').val();
    let height = <string> currentLayout.find('.height').val();

    return { x, y, width, height };
};