var litespeed_vary=document.cookie.replace(/(?:(?:^|.*;\s*)_lscache_vary\s*\=\s*([^;]*).*$)|^.*$/,"$1");if(!litespeed_vary){fetch('litespeed_url',{method:'POST',cache:'no-cache',redirect:'follow',}).then(response=>response.json()).then(data=>{console.log(data);if(data.hasOwnProperty('reload')&&data.reload=='yes'){sessionStorage.setItem('litespeed_docref',document.referrer);window.location.reload(true);}});}