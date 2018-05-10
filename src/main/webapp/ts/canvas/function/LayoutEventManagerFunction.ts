// Layout manager functions..
// flm = function layout manager

// tab events
export const flmBindTabEvent = (callback: Function) => {
    $('#tabs').find('.nav-tabs').find('li').each((index, element) => {
        $(element).bind('click', (event) => {
            let ul = $(event.target).parent().parent();
            flmDisableTab(ul);

            let li = $(event.target).parent();
            flmActiveTab(li);

            let elementName = $(event.target).attr('name');
            callback.apply(callback, [elementName]);
        });
    });
};

export const flmChangeTab = (elementId: string) => {
    $('.tab-content').children().each((index, element) => {
        let divId = $(element).attr('id');

        if(divId == elementId) {
            $(element).css('display', '');

        } else {
            if(divId != 'previewContainer') {
                $(element).css('display', 'none');
            }
        }
    });
};

const flmDisableTab = (ul: JQuery) => {
    ul.find('li').each((index, element) => {
        $(element).removeAttr('class');
    });
};

const flmActiveTab = (li: JQuery) => {
    li.attr('class', 'active');
};