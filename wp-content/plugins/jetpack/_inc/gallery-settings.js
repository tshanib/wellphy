(function($){var media=wp.media;media.view.Settings.Gallery=media.view.Settings.Gallery.extend({render:function(){var $el=this.$el;media.view.Settings.prototype.render.apply(this,arguments);$el.append(media.template('jetpack-gallery-settings'));media.gallery.defaults.type='default';this.update.apply(this,['type']);$el.find('select[name=type]').on('change',function(){var columnSetting=$el.find('select[name=columns]').closest('label.setting');if('default'===$(this).val()||'thumbnails'===$(this).val()){columnSetting.show();}else{columnSetting.hide();}}).change();return this;},});})(jQuery);