var marker = null;
var lat = 36.1041367;
var lng = 140.1028341;
 
function init() {
  //初期化
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    mapTypeControl:false,
    zoomControl:false,
    fullscreenControl:false,
    streetViewControl:false,
    clickableIcons:false,
    center: {lat: lat, lng: lng}
  });
 
  document.getElementById('lat').value = lat;
  document.getElementById('lng').value = lng;
 
  //初期マーカー
  marker = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(lat, lng),
  });
 
  //クリックイベント
  map.addListener('click', function(e) {
    clickMap(e.latLng, map);
  });
}
 
function clickMap(geo, map) {
  lat = geo.lat();
  lng = geo.lng();
 
  //小数点以下6桁に丸める場合
  //lat = Math.floor(lat * 1000000) / 1000000);
  //lng = Math.floor(lng * 1000000) / 1000000);
 
  document.getElementById('lat').value = lat;
  document.getElementById('lng').value = lng;
 
  //中心にスクロール
  map.panTo(geo);
 
  //マーカーの更新
  marker.setMap(null);
  marker = null;
  marker = new google.maps.Marker({
    map: map, position: geo 
  });
  
}      
