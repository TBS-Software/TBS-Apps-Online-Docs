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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="TBSGISDOC_0_0_0_StartPage.html">Заголовок</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_1_0_0_Introduction.html">Глава 1. Общее описание и условия использования</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_2_0_0_Installation.html">Глава 2. Установка и настройка приложения</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_2_1_0_ConfiguratorApp.html">Раздел 2.1. О конфигураторе и импорте систем координат</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_0_0_CommonCommandsUI.html">Глава 3. Общие диалоговые окна и команды приложения</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_3_1_0_CsManager.html">Раздел 3.1. Диалог выбора систем координат</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_2_0_GeoImport.html">Раздел 3.2. Диалоги импорта геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_3_3_0_GeoExport.html">Раздел 3.3. Диалог экспорта геоданных</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_0_0_cadPlugin.html">Глава 4. Плагин для nanoCAD (AutoCAD)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_4_1_0_cadPlugin_CS.html">Раздел 4.1. Работа с системами координат</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_0_cadPlugin_OGR.html">Раздел 4.2. Работа с векторными данными</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_1_cadPlugin_OGR_import.html">Часть 4.2.1. Импорт векторных геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_2_cadPlugin_OGR_export.html">Часть 4.2.2. Экспорт векторных геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_3_cadPlugin_OGR_geomAnalyze.html">Часть 4.2.3. Инструменты анализа геометрии</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_4_cadPlugin_OGR_geomTrim.html">Часть 4.2.4. Подрезка геометрии по контуру</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_5_cadPlugin_OGR_dwgProj.html">Часть 4.2.5. Пересчет DWG чертежей</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_6_cadPlugin_OGR_importText.html">Часть 4.2.6. Импорт текстовых данных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_2_7_cadPlugin_OGR_linkTexts.html">Часть 4.2.7. Связывание текстов по условию расположения</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_3_0_cadPlugin_GDAL.html">Раздел 4.3. Работа с растровыми данными</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="TBSGISDOC_4_3_1_cadPlugin_GDAL_import.html">Часть 4.3.1. Импорт растровых геоданных</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_3_2_cadPlugin_GDAL_tin2raster.html">Часть 4.3.2. Экспорт триангуляции в растр</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_4_0_cadPlugin_Geomarkers.html">Раздел 4.4. Работа с геомаркерами</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_5_0_cadPlugin_OpenData.html">Раздел 4.5. Работа с открытыми геоданными</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_6_0_cadPlugin_Attrs.html">Раздел 4.6. Работа с атрибутикой</a></li><li class="chapter-item expanded "><a href="TBSGISDOC_4_7_0_cadPlugin_Help.html">Раздел 4.7. Справочные команды</a></li></ol></li><li class="chapter-item expanded "><a href="TBSGISDOC_20_updates.html">Обновления</a></li></ol>';
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
