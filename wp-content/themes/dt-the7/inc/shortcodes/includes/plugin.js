(function(){tinymce.PluginManager.add('vogue_shortcodes',function(editor,url){editor.addButton('vogue_chortcodes_megabutton',{type:'menubutton',text:'Shortcodes',tooltip:'Theme shortcodes',icon:false,menu:[{text:'Gap',onclick:function(){editor.insertContent('[dt_gap height="10" /]');}},{text:'Divider',menu:[{text:'thin',onclick:function(){editor.insertContent('[dt_divider style="thin" /]');}},{text:'thick',onclick:function(){editor.insertContent('[dt_divider style="thick" /]');}}]},{text:'Tooltip',onclick:function(){editor.insertContent('[dt_tooltip title="TITLE"]'+editor.selection.getContent()+'[/dt_tooltip]');}},{text:'Highlight',onclick:function(){editor.insertContent('[dt_highlight color="" text_color="" bg_color=""]'+editor.selection.getContent()+'[/dt_highlight]');}},{text:'Code',onclick:function(){editor.insertContent('[dt_code]'+editor.selection.getContent()+'[/dt_code]');}},{text:'Simple Login Form',onclick:function(){var attr=['label_username=""','label_password=""','label_remember=""','label_log_in=""',];editor.insertContent('[dt_simple_login_form '+attr.join(' ')+']');}},]});});})();