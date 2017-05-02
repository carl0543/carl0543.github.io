function is_desktop() {
  // return $(window).height() > 691 && $(window).width() > 768;
  return window.screen.height > 691 && window.screen.width > 768;
}

function is_ipad() {
  return navigator.userAgent.match(/iPad/i) != null;
}

function is_ios() {
  return /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
}

function is_iphone() {
  return /(iPhone|iPod)/g.test( navigator.userAgent );
}

function is_iphone5(){
  function iOSVersion(){
    var agent = window.navigator.userAgent,
    start = agent.indexOf( 'OS ' );
    if( (agent.indexOf( 'iPhone' ) > -1) && start > -1)
      return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    else return 0;
  }
  return iOSVersion() >= 6 && window.devicePixelRatio >= 2 && screen.availHeight==548 ? true : false;
} 

function is_android() {
  return /(Android)/g.test( navigator.userAgent );
}

function chrome_for_tablet() {
  return (navigator.userAgent.indexOf("Chrome") != -1) && (navigator.userAgent.indexOf("Android") != -1);
}

function chrome_for_ios() {
  return (navigator.userAgent.indexOf("CriOS") != -1);
}

function is_chrome_mobile() {
  return /Chrome\/[.0-9]* Mobile/g.test( navigator.userAgent ) || chrome_for_tablet() || chrome_for_ios();
}

function is_windows_phone() {
  return /(Windows Phone)/g.test( navigator.userAgent );
}
