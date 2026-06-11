// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="TBSGISDOC_0_0_0_StartPage.html">Заголовок</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_1_0_0_Introduction.html">Глава 1. Общее описание и условия использования</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_1_1_0_Licensing.html">Раздел 1.1. Лицензирование</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_2_0_0_Installation.html">Глава 2. Установка и настройка приложения</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_2_1_0_ConfiguratorApp.html">Раздел 2.1. О конфигураторе и импорте систем координат</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_0_0_CommonCommandsUI.html">Глава 3. Общие диалоговые окна и команды приложения</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_3_1_0_CsManager.html">Раздел 3.1. Диалог выбора систем координат</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_0_GeoImport.html">Раздел 3.2. Диалоги импорта геоданных</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_1_GeoImport_MGGT.html">Часть 3.2.1. Замечания по импорту МГГТ</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_2_GeoImport_RRXML.html">Часть 3.2.2. Замечания по импорту Росреестр XML</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_3_GeoImport_TextFiles.html">Часть 3.2.3. Замечания по импорту текстовых файлов</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_4_GeoImport_Raster.html">Часть 3.2.4. Замечания по импорту растровых геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_5_GeoImport_RasterDEM.html">Часть 3.2.5. Замечания по импорту DEM-геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_6_GeoImport_OpenData.html">Часть 3.2.6. Замечания по импорту открытых геоданных</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_3_0_GeoExport.html">Раздел 3.3. Диалог экспорта геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_4_0_GeomarkersSettings.html">Раздел 3.4. Диалог настройки геомаркеров</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_0_0_cadPlugin.html">Глава 4. Плагин для nanoCAD (AutoCAD)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_4_1_0_cadPlugin_CS.html">Раздел 4.1. Работа с системами координат</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_0_cadPlugin_OGR.html">Раздел 4.2. Работа с векторными данными</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_1_cadPlugin_OGR_import.html">Часть 4.2.1. Импорт векторных геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_2_cadPlugin_OGR_export.html">Часть 4.2.2. Экспорт векторных геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_3_cadPlugin_OGR_geomAnalyze.html">Часть 4.2.3. Инструменты анализа геометрии</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_4_cadPlugin_OGR_geomTrim.html">Часть 4.2.4. Подрезка геометрии по контуру</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_5_cadPlugin_OGR_dwgProj.html">Часть 4.2.5. Пересчет DWG чертежей</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_6_cadPlugin_OGR_importText.html">Часть 4.2.6. Импорт текстовых данных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_7_cadPlugin_OGR_linkTexts.html">Часть 4.2.7. Связывание текстов по условию расположения</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_3_0_cadPlugin_GDAL.html">Раздел 4.3. Работа с растровыми данными</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_4_3_1_cadPlugin_GDAL_import.html">Часть 4.3.1. Импорт растровых геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_3_2_cadPlugin_GDAL_tin2raster.html">Часть 4.3.2. Экспорт триангуляции в растр</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_4_0_cadPlugin_Geomarkers.html">Раздел 4.4. Работа с геомаркерами</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_5_0_cadPlugin_OpenData.html">Раздел 4.5. Работа с открытыми геоданными</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_6_0_cadPlugin_Attrs.html">Раздел 4.6. Работа с атрибутикой</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_7_0_cadPlugin_Help.html">Раздел 4.7. Справочные команды</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_0_0_rengaPlugin.html">Глава 5. Плагин для Renga</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_5_1_0_rengaPlugin_CS.html">Раздел 5.1. Установка системы координат</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_2_0_rengaPlugin_OGR.html">Раздел 5.2. Работа с векторными данными</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_5_2_1_rengaPlugin_OGR_import.html">Часть 5.2.1. Импорт векторных геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_2_2_rengaPlugin_OGR_export.html">Часть 5.2.2. Экспорт векторных геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_2_3_rengaPlugin_OGR_importText.html">Часть 5.2.3. Импорт текстовых данных</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_3_0_rengaPlugin_GDAL.html">Раздел 5.3. Работа с растровыми геоданными</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_5_3_1_rengaPlugin_GDAL_import.html">Часть 5.3.1. Импорт растровых геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_3_2_rengaPlugin_GDAL_importDEM.html">Часть 5.3.2. Импорт DEM (Создать рельеф)</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_4_0_rengaPlugin_Geomarkers.html">Раздел 5.4. Работа с геомаркерами</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_5_0_rengaPlugin_OpenData.html">Раздел 5.5. Работа с открытыми геоданными</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_6_0_rengaPlugin_Attrs.html">Раздел 5.6. Работа с атрибутикой</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_5_7_0_rengaPlugin_Help.html">Раздел 5.7. Справочные команды</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_20_updates.html">Обновления</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
