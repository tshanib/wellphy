(function($){$(document).ready(function(){initEvents();configFixedElements();});function configFixedElements(){var jpTopFrame=$('.frame.top'),jpBottomFrame=$('.frame.bottom'),$body=$('body');$body.scroll(function(){if(33>jpTopFrame.offset().top){jpTopFrame.addClass('fixed');$body.addClass('jp-frame-top-fixed');}
if(120<=jpBottomFrame.offset().top){jpTopFrame.removeClass('fixed');$body.removeClass('jp-frame-top-fixed');}});$('table.jetpack-modules',jpBottomFrame).addClass('with-transparency');$('.manage-left',jpBottomFrame).css('width','');$('.manage-right',jpBottomFrame).show();}
function initEvents(){$('.filter-search').on('click',function(){$(this).toggleClass('active');$('.manage-right').toggleClass('show');$('.shade').toggle();});$('.checkall').on('click',function(){$('.table-bordered').find(':checkbox').prop('checked',this.checked);});$('.shade, .modal .close').on('click',function(event){$('.shade, .modal').hide();$('.manage-right').removeClass('show');event.preventDefault();});}})(jQuery);