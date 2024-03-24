var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_COMPORTAMIENTO_VOTO_1 = new ol.format.GeoJSON();
var features_COMPORTAMIENTO_VOTO_1 = format_COMPORTAMIENTO_VOTO_1.readFeatures(json_COMPORTAMIENTO_VOTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMPORTAMIENTO_VOTO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPORTAMIENTO_VOTO_1.addFeatures(features_COMPORTAMIENTO_VOTO_1);
var lyr_COMPORTAMIENTO_VOTO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMPORTAMIENTO_VOTO_1, 
                style: style_COMPORTAMIENTO_VOTO_1,
                popuplayertitle: "COMPORTAMIENTO_VOTO",
                interactive: true,
                title: '<img src="styles/legend/COMPORTAMIENTO_VOTO_1.png" /> COMPORTAMIENTO_VOTO'
            });
var format_DIPUTADOS_LOCALES_2021_2 = new ol.format.GeoJSON();
var features_DIPUTADOS_LOCALES_2021_2 = format_DIPUTADOS_LOCALES_2021_2.readFeatures(json_DIPUTADOS_LOCALES_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIPUTADOS_LOCALES_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIPUTADOS_LOCALES_2021_2.addFeatures(features_DIPUTADOS_LOCALES_2021_2);
var lyr_DIPUTADOS_LOCALES_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIPUTADOS_LOCALES_2021_2, 
                style: style_DIPUTADOS_LOCALES_2021_2,
                popuplayertitle: "DIPUTADOS_LOCALES_2021",
                interactive: true,
    title: 'DIPUTADOS_LOCALES_2021<br />\
    <img src="styles/legend/DIPUTADOS_LOCALES_2021_2_0.png" /> GANADA<br />\
    <img src="styles/legend/DIPUTADOS_LOCALES_2021_2_1.png" /> PERDIDA<br />'
        });
var format_2doDistrito_3 = new ol.format.GeoJSON();
var features_2doDistrito_3 = format_2doDistrito_3.readFeatures(json_2doDistrito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2doDistrito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2doDistrito_3.addFeatures(features_2doDistrito_3);
var lyr_2doDistrito_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2doDistrito_3, 
                style: style_2doDistrito_3,
                popuplayertitle: "2do Distrito",
                interactive: true,
                title: '<img src="styles/legend/2doDistrito_3.png" /> 2do Distrito'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_COMPORTAMIENTO_VOTO_1.setVisible(true);lyr_DIPUTADOS_LOCALES_2021_2.setVisible(true);lyr_2doDistrito_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_COMPORTAMIENTO_VOTO_1,lyr_DIPUTADOS_LOCALES_2021_2,lyr_2doDistrito_3];
lyr_COMPORTAMIENTO_VOTO_1.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'id': 'id', 'seccion': 'seccion', 'df': 'df', 'dl': 'dl', 'de_2018_20': 'de_2018_20', 'de_2019_20': 'de_2019_20', });
lyr_DIPUTADOS_LOCALES_2021_2.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'id': 'id', 'df': 'df', 'dl': 'dl', 'seccion': 'seccion', 'alianza_pa': 'alianza_pa', 'alianza_mo': 'alianza_mo', 'diferencia': 'diferencia', });
lyr_2doDistrito_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'df': 'df', 'dl': 'dl', 'seccion': 'seccion', 'ln': 'ln', 'meta': 'meta', 'prioridad': 'prioridad', 'subcomite': 'subcomite', });
lyr_COMPORTAMIENTO_VOTO_1.set('fieldImages', {'qc_id_0': 'TextEdit', 'qc_id': 'TextEdit', 'id': 'TextEdit', 'seccion': 'TextEdit', 'df': 'TextEdit', 'dl': 'TextEdit', 'de_2018_20': 'TextEdit', 'de_2019_20': 'TextEdit', });
lyr_DIPUTADOS_LOCALES_2021_2.set('fieldImages', {'qc_id_0': 'TextEdit', 'qc_id': 'TextEdit', 'id': 'TextEdit', 'df': 'TextEdit', 'dl': 'TextEdit', 'seccion': 'TextEdit', 'alianza_pa': 'TextEdit', 'alianza_mo': 'TextEdit', 'diferencia': 'TextEdit', });
lyr_2doDistrito_3.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'df': 'TextEdit', 'dl': 'TextEdit', 'seccion': 'TextEdit', 'ln': 'TextEdit', 'meta': 'TextEdit', 'prioridad': 'TextEdit', 'subcomite': 'TextEdit', });
lyr_COMPORTAMIENTO_VOTO_1.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'id': 'no label', 'seccion': 'no label', 'df': 'no label', 'dl': 'no label', 'de_2018_20': 'no label', 'de_2019_20': 'no label', });
lyr_DIPUTADOS_LOCALES_2021_2.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'id': 'no label', 'df': 'no label', 'dl': 'no label', 'seccion': 'no label', 'alianza_pa': 'no label', 'alianza_mo': 'no label', 'diferencia': 'no label', });
lyr_2doDistrito_3.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'df': 'no label', 'dl': 'no label', 'seccion': 'no label', 'ln': 'no label', 'meta': 'no label', 'prioridad': 'no label', 'subcomite': 'no label', });
lyr_2doDistrito_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});