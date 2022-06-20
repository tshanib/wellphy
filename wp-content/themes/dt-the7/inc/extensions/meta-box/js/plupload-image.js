jQuery(function($)
{$('.the7-mb-images').on('click','.the7-mb-delete-file',function()
{var $dragndrop=$(this).parents('.the7-mb-images').siblings('.the7-mb-drag-drop');$dragndrop.removeClass('hidden');});$('.the7-mb-drag-drop').each(function()
{var $dropArea=$(this),$imageList=$dropArea.siblings('.the7-mb-uploaded'),uploaderData=$dropArea.data('js_options'),the7mbUploader={};uploaderData.multipart_params=$.extend({_ajax_nonce:$dropArea.data('upload_nonce'),post_id:$('#post_ID').val()},uploaderData.multipart_params);the7mbUploader=new plupload.Uploader(uploaderData);the7mbUploader.init();the7mbUploader.bind('FilesAdded',function(up,files)
{var maxFileUploads=$imageList.data('max_file_uploads'),uploaded=$imageList.children().length,msg=maxFileUploads>1?the7mbFile.maxFileUploadsPlural:the7mbFile.maxFileUploadsSingle;msg=msg.replace('%d',maxFileUploads);if(maxFileUploads>0&&(uploaded+files.length)>maxFileUploads)
{if(uploaded<maxFileUploads)
{var diff=maxFileUploads-uploaded;up.splice(diff-1,files.length-diff);files=up.files;}
alert(msg);}
if(uploaded+files.length>=maxFileUploads)
$dropArea.addClass('hidden');max=parseInt(up.settings.max_file_size,10);plupload.each(files,function(file)
{addLoading(up,file,$imageList);addThrobber(file);if(file.size>=max)
removeError(file);});up.refresh();up.start();});the7mbUploader.bind('Error',function(up,e)
{addLoading(up,e.file,$imageList);removeError(e.file);up.removeFile(e.file);});the7mbUploader.bind('FileUploaded',function(up,file,response)
{var res=wpAjax.parseAjaxResponse($.parseXML(response.response),'ajax-response');false===res.errors?$('li#'+file.id).replaceWith(res.responses[0].data):removeError(file);});});function removeError(file)
{$('li#'+file.id).addClass('the7-mb-image-error').delay(1600).fadeOut('slow',function()
{$(this).remove();});}
function addLoading(up,file,$ul)
{$ul.removeClass('hidden').append("<li id='"+file.id+"'><div class='the7-mb-image-uploading-bar'></div><div id='"+file.id+"-throbber' class='the7-mb-image-uploading-status'></div></li>");}
function addThrobber(file)
{$('#'+file.id+'-throbber').html("<img class='the7-mb-loader' height='64' width='64' src='"+RWMB.url+"img/loader.gif'/>");}});