console.log('%c%c %c\n muno9748%c\n\nRepository: https://github.com/muno9748/EntLibrary\nSourceCode: https://github.com/muno9748/EntLibrary/blob/master/EntLibrary-2.0.js\n', 'font-size: 1.2rem; font-family: sans-serif;', 'background: url(https://avatars1.githubusercontent.com/u/58895791?s=64&v=4); padding-right: 58px; padding-top: 48px; margin-left: 15px;', 'font-family: sans-serif; font-size: 1.1rem;','');
console.log(`
%cMIT License

Copyright (c) 2020 muno9748

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`, 'color: red; font-size: 1.1rem; text-shadow: 1px 0 black, -1px 0 black;');
Entry.staticBlocks = [
    {
        category: 'start',
        blocks: [
            'when_run_button_click',
            'when_some_key_pressed',
            'mouse_clicked',
            'mouse_click_cancled',
            'when_object_click',
            'when_object_click_canceled',
            'when_message_cast',
            'message_cast',
            'message_cast_wait',
            'when_scene_start',
            'start_scene',
            'start_neighbor_scene',
            'check_object_property',
            'check_block_execution',
            'switch_scope',
            'is_answer_submited',
            'check_lecture_goal',
            'check_variable_by_name',
            'show_prompt',
            'check_goal_success',
            'positive_number',
            'negative_number',
            'wildcard_string',
            'wildcard_boolean',
            'register_score',
        ],
    },
    {
        category: 'flow',
        blocks: [
            'wait_second',
            'repeat_basic',
            'repeat_inf',
            'repeat_while_true',
            'stop_repeat',
            '_if',
            'if_else',
            'wait_until_true',
            'stop_object',
            'restart_project',
            'when_clone_start',
            'create_clone',
            'delete_clone',
            'remove_all_clones',
        ],
    },
    {
        category: 'moving',
        blocks: [
            'move_direction',
            'bounce_wall',
            'move_x',
            'move_y',
            'move_xy_time',
            'locate_x',
            'locate_y',
            'locate_xy',
            'locate_xy_time',
            'locate',
            'locate_object_time',
            'rotate_relative',
            'direction_relative',
            'rotate_by_time',
            'direction_relative_duration',
            'rotate_absolute',
            'direction_absolute',
            'see_angle_object',
            'move_to_angle',
        ],
    },
    {
        category: 'looks',
        blocks: [
            'show',
            'hide',
            'dialog_time',
            'dialog',
            'remove_dialog',
            'change_to_some_shape',
            'change_to_next_shape',
            'add_effect_amount',
            'change_effect_amount',
            'erase_all_effects',
            'change_scale_size',
            'set_scale_size',
            'flip_x',
            'flip_y',
            'change_object_index',
        ],
    },
    {
        category: 'brush',
        blocks: [
            'brush_stamp',
            'start_drawing',
            'stop_drawing',
            'set_color',
            'set_random_color',
            'change_thickness',
            'set_thickness',
            'change_brush_transparency',
            'set_brush_tranparency',
            'brush_erase_all',
        ],
    },
    {
        category: 'text',
        blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
    },
    {
        category: 'sound',
        blocks: [
            'sound_something_with_block',
            'sound_something_second_with_block',
            'sound_from_to',
            'sound_something_wait_with_block',
            'sound_something_second_wait_with_block',
            'sound_from_to_and_wait',
            'sound_volume_change',
            'sound_volume_set',
            'sound_silent_all',
        ],
    },
    {
        category: 'judgement',
        blocks: [
            'is_clicked',
            'is_press_some_key',
            'reach_something',
            'boolean_basic_operator',
            'boolean_and_or',
            'boolean_not',
        ],
    },
    {
        category: 'calc',
        blocks: [
            'calc_basic',
            'calc_rand',
            'coordinate_mouse',
            'coordinate_object',
            'get_sound_volume',
            'quotient_and_mod',
            'calc_operation',
            'get_project_timer_value',
            'choose_project_timer_action',
            'set_visible_project_timer',
            'get_date',
            'distance_something',
            'get_sound_duration',
            'get_user_name',
            'length_of_string',
            'combine_something',
            'char_at',
            'substring',
            'index_of_string',
            'replace_string',
            'change_string_case',
        ],
    },
    {
        category: 'variable',
        blocks: [
            'variableAddButton',
            'listAddButton',
            'ask_and_wait',
            'get_canvas_input_value',
            'set_visible_answer',
            'get_variable',
            'change_variable',
            'set_variable',
            'show_variable',
            'hide_variable',
            'value_of_index_from_list',
            'add_value_to_list',
            'remove_value_from_list',
            'insert_value_to_list',
            'change_value_list_index',
            'length_of_list',
            'is_included_in_list',
            'show_list',
            'hide_list',
        ],
    },
    {
        category: 'func',
        blocks: ['functionAddButton'],
    },
    {
        category: 'analysis',
        blocks: [
            'analizyDataAddButton',
            'append_row_to_table',
            'insert_row_to_table',
            'delete_row_from_table',
            'set_value_from_table',
            'get_table_count',
            'get_value_from_table',
            'calc_values_from_table',
            'open_table_chart',
            'close_table_chart',
        ],
    },
    {
        category: 'ai_utilize',
        blocks: [
            'aiUtilizeBlockAddButton',
            'aiUtilizeModelTrainButton',
            'audio_title',
            'check_microphone',
            'speech_to_text_convert',
            'speech_to_text_get_value',
            'get_microphone_volume',
            'tts_title',
            'read_text',
            'read_text_wait_with_block',
            'set_tts_property',
            'translate_title',
            'get_translated_string',
            'check_language',
            'video_title',
            'video_draw_webcam',
            'video_check_webcam',
            'video_flip_camera',
            'video_set_camera_opacity_option',
            'video_motion_value',
            'video_toggle_model',
            'video_is_model_loaded',
            'video_number_detect',
            'video_toggle_ind',
            'video_body_part_coord',
            'video_face_part_coord',
            'video_detected_face_info',
        ],
    },
    {
        category: 'expansion',
        blocks: [
            'expansionBlockAddButton',
            'weather_title',
            'check_weather',
            'check_finedust',
            'get_weather_data',
            'get_current_weather_data',
            'get_today_temperature',
            'check_city_weather',
            'check_city_finedust',
            'get_city_weather_data',
            'get_current_city_weather_data',
            'get_today_city_temperature',
            'festival_title',
            'count_festival',
            'get_festival_info',
            'behaviorConductDisaster_title',
            'count_disaster_behavior',
            'get_disaster_behavior',
            'behaviorConductLifeSafety_title',
            'count_lifeSafety_behavior',
            'get_lifeSafety_behavior',
        ],
    },
    {
        category: 'arduino',
        blocks: [
            'arduino_reconnect',
            'arduino_open',
            'arduino_cloud_pc_open',
            'arduino_connect',
            'arduino_download_connector',
            'download_guide',
            'arduino_download_source',
            'arduino_noti',
        ].concat(EntryStatic.DynamicHardwareBlocks),
    }
];
EntryStatic.getAllBlocks = () => {
    return Entry.staticBlocks;
}
Entry.customCategories = [];
Entry.CustomBlock = class EntryBlock {
        constructor(type) {
                this.type = type;
                this.meta_ = {
                        color: '#000000',
                        fontColor: '#FFFFFF',
                        outerLine: '#000000',
                        skeleton: 'basic',
                        statement: [],
                        params: [],
                        events: {},
                        def: {
                            params: [],
                            type: this.type
                        },
                        paramsKeyMap: {},
                        class: 'default',
                        func: () => {console.warn('Error! Block\'s Action is not defined!');},
                        template: 'no-template-created'
                };
        }

        setTemplate(template) {
                this.meta_.template = template;
                return this;
        }

        setColor(_default, darken, text) {
                _default && /#[0-9a-fA-F]{6}/.test(_default) && (this.meta_.color = _default);
                darken && /#[0-9a-fA-F]{6}/.test(darken) && (this.meta_.outerLine = darken);
                text && /#[0-9a-fA-F]{6}/.test(text) && (this.meta_.fontColor = text);
                return this;
        }

        setSkeleton(type) {
                this.meta_.skeleton = type;
                return this;
        }

        setParams(params) {
                this.meta_.params = [];
                this.meta_.def.params = [];
                this.meta_.paramsKeyMap = {};
                params.forEach((param,i) => {
                        this.meta_.params.push(param.data);
                        this.meta_.def.params.push(params.def || null);
                        this.meta_.paramsKeyMap[this.meta_.name] = i;
                });
                return this;
        }

        addEvent(name, event) {
                typeof this.meta_.events[name] != 'Array' && (this.meta_.events[name] = []);
                this.meta_.events[name].push(event);
                return this;
        }

        setClass(classname) {
                this.meta_.class = classname;
                return this;
        }

        setAction(func) {
                this.meta_.func = func;
                return this;
        }

        attach() {
                Entry.block[this.type] = this.meta_;
                return this;
        }

        mutate() {
                console.log('Updating Category...');
                this.attach();
                Entry.Mutator.mutate(this.type, { template: this.meta_.template, params: this.meta_.params }, this.meta_);
                Entry.playground.mainWorkspace.blockMenu.clearCategory();
                Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                        { category: 'start', visible: true },
                        { category: 'flow', visible: true },
                        { category: 'moving', visible: true },
                        { category: 'looks', visible: true },
                        { category: 'brush', visible: true },
                        { category: 'text', visible: true },
                        { category: 'sound', visible: true },
                        { category: 'judgement', visible: true },
                        { category: 'calc', visible: true },
                        { category: 'variable', visible: true },
                        { category: 'func', visible: true },
                        { category: 'analysis', visible: true },
                        { category: 'ai_utilize', visible: true },
                        { category: 'expansion', visible: true },
                ].concat(
                        ...(Entry.customCategories.map(l => ({ category: l, visible: true })))
                ).concat({ category: 'arduino', visible:true }));
                for(let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                        if(!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                                $($('.entryCategoryElementWorkspace')[i]).attr('class','entryCategoryElementWorkspace');
                        }
                }
                Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
                Entry.playground.blockMenu._generateCategoryCodes([
                        'start',
                        'flow',
                        'moving',
                        'looks',
                        'brush',
                        'text',
                        'sound',
                        'judgement',
                        'calc',
                        'variable',
                        'func',
                        'analysis',
                        'ai_utilize',
                        'expansion',
                ].concat(...(Entry.customCategories)).concat('arduino'));
                return this;
        }
}
Entry.addBlockToDefaultCategory = (category, ...blocks) => {
        Entry.staticBlocks.find(c => c.category == category).blocks.push(...blocks);
        return {mutate() {
                console.log('Updating Category...');
                Entry.playground.mainWorkspace.blockMenu.clearCategory();
                Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                        { category: 'start', visible: true },
                        { category: 'flow', visible: true },
                        { category: 'moving', visible: true },
                        { category: 'looks', visible: true },
                        { category: 'brush', visible: true },
                        { category: 'text', visible: true },
                        { category: 'sound', visible: true },
                        { category: 'judgement', visible: true },
                        { category: 'calc', visible: true },
                        { category: 'variable', visible: true },
                        { category: 'func', visible: true },
                        { category: 'analysis', visible: true },
                        { category: 'ai_utilize', visible: true },
                        { category: 'expansion', visible: true },
                ].concat(
                        ...(Entry.customCategories.map(l => ({ category: l, visible: true })))
                ).concat({ category: 'arduino', visible:true }));
                for(let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                        if(!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                                $($('.entryCategoryElementWorkspace')[i]).attr('class','entryCategoryElementWorkspace');
                        }
                }
                Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
                Entry.playground.blockMenu._generateCategoryCodes([
                        'start',
                        'flow',
                        'moving',
                        'looks',
                        'brush',
                        'text',
                        'sound',
                        'judgement',
                        'calc',
                        'variable',
                        'func',
                        'analysis',
                        'ai_utilize',
                        'expansion',
                ].concat(...(Entry.customCategories)).concat('arduino'));
                Entry.getMainWS().blockMenu.view.find('.entryCategoryElementWorkspace')[0].click();
        }};
}
Entry.CustomCategory = class EntryCategory {
        constructor(name = 'undefined') {
                this.categoryName = name;
                this.meta_ = { text: 'CustomCategory', cssID: Entry.Utils.generateId(), back: [{
                        color: '#232323',
                        image: '/lib/entry-js/images/hardware.svg'
                }, {
                        color: '#00B6B1',
                        image: '/lib/entry-js/images/hardware_on.svg'
                }] };
                Entry.staticBlocks.push({ category: name, blocks: [] });
                Entry.customCategories.push(name);
        }

        addBlock(...blockType) {
                Entry.staticBlocks.find(c => c.category == this.categoryName).blocks.push(...blockType);
                return this;
        }

        setText(text) {
                this.meta_.text = text;
                return this;
        }

        setBackground(type, color, image) {
                if(type == 'off') {
                        color && /#[0-9a-fA-F]{6}/.test(color) && (this.meta_[0].color = color);
                        image && (this.meta_[0].image = image);
                } else if (type == 'on') {
                        color && /#[0-9a-fA-F]{6}/.test(color) && (this.meta_[1].color = color);
                        image && (this.meta_[1].image = image);
                } else {
                        throw new Error('Invalid type! set to off or on');
                }
                return this;
        }

        mutate() {
                $(`#EntLibrary_Category_${this.meta_.cssID}`).remove();
                $('head').append(`<style id="EntLibrary_Category_${this.meta_.cssID}">
                        #entryCategory${this.categoryName} {
                                background-repeat: no-repeat;
                                background-color: ${this.meta_.back[0].color};
                                background-image: url(${this.meta_.back[0].image});
                                border-color: ${this.meta_.back[0].color};
                        }
                        .entrySelectedCategory#entryCategory${this.categoryName} {
                                background-repeat: no-repeat !important;
                                background-color: ${this.meta_.back[1].color} !important;
                                background-image: url(${this.meta_.back[1].image}) !important;
                                border-color: ${this.meta_.back[1].color} !important;
                        }
                </style>`);
                console.log('Updating Category...');
                Entry.playground.mainWorkspace.blockMenu.clearCategory();
                Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                        { category: 'start', visible: true },
                        { category: 'flow', visible: true },
                        { category: 'moving', visible: true },
                        { category: 'looks', visible: true },
                        { category: 'brush', visible: true },
                        { category: 'text', visible: true },
                        { category: 'sound', visible: true },
                        { category: 'judgement', visible: true },
                        { category: 'calc', visible: true },
                        { category: 'variable', visible: true },
                        { category: 'func', visible: true },
                        { category: 'analysis', visible: true },
                        { category: 'ai_utilize', visible: true },
                        { category: 'expansion', visible: true },
                ].concat(
                        ...(Entry.customCategories.map(l => ({ category: l, visible: true })))
                ).concat({ category: 'arduino', visible:true }));
                for(let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                        if(!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                                $($('.entryCategoryElementWorkspace')[i]).attr('class','entryCategoryElementWorkspace');
                        }
                }
                Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
                Entry.playground.blockMenu._generateCategoryCodes([
                        'start',
                        'flow',
                        'moving',
                        'looks',
                        'brush',
                        'text',
                        'sound',
                        'judgement',
                        'calc',
                        'variable',
                        'func',
                        'analysis',
                        'ai_utilize',
                        'expansion',
                ].concat(...(Entry.customCategories)).concat('arduino'));
                $(`#entryCategory${this.categoryName}`).text(this.meta_.text);
                return this;
        }
}
