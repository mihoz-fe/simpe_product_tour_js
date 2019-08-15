window.onload=function(){document.body.classList.contains("simple-product-tour")&&function(){var t=document.createElement("div"),e=document.createElement("link");t.className="tour overlay",t.innerHTML='<div class="tour-notify" id="notify"><div class="tour-notify-actions"><button id="btnNext">next</button><button id="btnFinish" hidden>finish</button></div></div>',document.body.append(t),e.setAttribute("src","css/simple-product-tour.css"),t.prepend(e);var n=document.querySelector(".overlay.tour"),o=document.querySelectorAll(".point"),i=[],s=0,c=["1. notify one","2. notify two","3. notify three"];function r(){2<i.length&&0<s&&i[s-1].item.classList.remove("tour-point-show"),s<i.length&&i[s].item.classList.add("tour-point-show"),function(t,e){t.firstChild.data=e}(notify,c[s]),function(t,e){var n=function(t){var e=t.getBoundingClientRect();return{top:e.top+pageYOffset,left:e.left+pageXOffset,anchHeight:t.offsetHeight,anchWidth:t.offsetWidth}}(e);t.style.left=n.left+n.anchWidth+10+"px",t.style.top=n.top+n.anchHeight/2-15+"px"}(notify,i[s].item)}function d(){if(s++,console.log(s),s===i.length)return i[s-1].item.classList.remove("tour-point-show"),btnNext.innerHTML="next",btnFinish.setAttribute("hidden",!0),s=0,void r();r(),s===i.length-1&&(this.innerHTML="once more",btnFinish.removeAttribute("hidden"))}o.forEach(function(t){var e=new Object(t);i.push(e)}),console.log(i),i.sort(function(t,e){return t.newItem.dataset.step>e.newItem.dataset.step?1:t.newItem.dataset.step<e.newItem.dataset.step?-1:0}),r(),btnNext.onclick=d,btnFinish.onclick=function(){d(),n.style.display="none"}}()};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1wcm9kdWN0LXRvdXIuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b3VyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwic2V0QXR0cmlidXRlIiwicHJlcGVuZCIsInRvdXJPdmVybGF5IiwicXVlcnlTZWxlY3RvciIsInRvdXJMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInNvcnRlZExpc3QiLCJpIiwibm90aWZ5TGlzdCIsInNob3dOZXh0IiwibGVuZ3RoIiwiaXRlbSIsInJlbW92ZSIsImFkZCIsImVsIiwidHh0IiwiZmlyc3RDaGlsZCIsImRhdGEiLCJpbnNlcnROb3RpZnkiLCJub3RpZnkiLCJhbmNoIiwiYW5jaENvb3JkIiwiY29vcmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImxlZnQiLCJwYWdlWE9mZnNldCIsImFuY2hIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhbmNoV2lkdGgiLCJvZmZzZXRXaWR0aCIsImdldENvb3JkaW5hdGVzIiwicG9zaXRpb24iLCJuZXh0IiwiY29uc29sZSIsImxvZyIsImJ0bk5leHQiLCJidG5GaW5pc2giLCJ0aGlzIiwicmVtb3ZlQXR0cmlidXRlIiwiZm9yRWFjaCIsIm5ld0l0ZW0iLCJPYmplY3QiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiZGF0YXNldCIsInN0ZXAiLCJvbmNsaWNrIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQVMsV0FFUkMsU0FBU0MsS0FBS0MsVUFBVUMsU0FBUyx3QkFJckMsV0FDSSxJQUFJQyxFQUFPSixTQUFTSyxjQUFjLE9BQzlCQyxFQUFRTixTQUFTSyxjQUFjLFFBRW5DRCxFQUFLRyxVQUFZLGVBQ2pCSCxFQUFLSSxVQUFZLG9LQUNqQlIsU0FBU0MsS0FBS1EsT0FBT0wsR0FDckJFLEVBQU1JLGFBQWEsTUFKSiwrQkFLZk4sRUFBS08sUUFBUUwsR0FHYixJQUFJTSxFQUFjWixTQUFTYSxjQUFjLGlCQUNyQ0MsRUFBV2QsU0FBU2UsaUJBQWlCLFVBQ3JDQyxFQUFhLEdBQ2JDLEVBQUksRUFDSkMsRUFBYSxDQUNULGdCQUNBLGdCQUNBLG1CQW1CUixTQUFTQyxJQUNtQixFQUFwQkgsRUFBV0ksUUFBa0IsRUFBSkgsR0FDekJELEVBQVdDLEVBQUksR0FBR0ksS0FBS25CLFVBQVVvQixPQUFPLG1CQUV4Q0wsRUFBSUQsRUFBV0ksUUFDZkosRUFBV0MsR0FBR0ksS0FBS25CLFVBQVVxQixJQUFJLG1CQXVCekMsU0FBc0JDLEVBQUlDLEdBQ3RCRCxFQUFHRSxXQUFXQyxLQUFPRixFQXRCckJHLENBQWFDLE9BQVFYLEVBQVdELElBY3BDLFNBQWtCTyxFQUFJTSxHQUNsQixJQUFJQyxFQVhSLFNBQXdCRCxHQUNwQixJQUFJRSxFQUFRRixFQUFLRyx3QkFDakIsTUFBTyxDQUNIQyxJQUFLRixFQUFNRSxJQUFNQyxZQUNqQkMsS0FBTUosRUFBTUksS0FBT0MsWUFDbkJDLFdBQVlSLEVBQUtTLGFBQ2pCQyxVQUFXVixFQUFLVyxhQUtKQyxDQUFlWixHQUUvQk4sRUFBR2xCLE1BQU04QixLQUFPTCxFQUFVSyxLQUFPTCxFQUFVUyxVQUFZLEdBQUssS0FDNURoQixFQUFHbEIsTUFBTTRCLElBQU1ILEVBQVVHLElBQU1ILEVBQVVPLFdBQWEsRUFBSSxHQUFLLEtBakIvREssQ0FBU2QsT0FBUWIsRUFBV0MsR0FBR0ksTUF3Qm5DLFNBQVN1QixJQUlMLEdBRkEzQixJQUNBNEIsUUFBUUMsSUFBSTdCLEdBQ1JBLElBQU1ELEVBQVdJLE9BTWpCLE9BTEFKLEVBQVdDLEVBQUksR0FBR0ksS0FBS25CLFVBQVVvQixPQUFPLG1CQUN4Q3lCLFFBQVF2QyxVQUFZLE9BQ3BCd0MsVUFBVXRDLGFBQWEsVUFBVSxHQUNqQ08sRUFBSSxPQUNKRSxJQUlKQSxJQUVJRixJQUFNRCxFQUFXSSxPQUFTLElBQzFCNkIsS0FBS3pDLFVBQVksWUFDakJ3QyxVQUFVRSxnQkFBZ0IsV0FqRWxDcEMsRUFBU3FDLFFBQVEsU0FBUzlCLEdBQ3RCLElBQUkrQixFQUFXLElBQUlDLE9BQU9oQyxHQUMxQkwsRUFBV3NDLEtBQUtGLEtBRXBCUCxRQUFRQyxJQUFJOUIsR0FFWkEsRUFBV3VDLEtBQUssU0FBU0MsRUFBR0MsR0FDeEIsT0FBSUQsRUFBRUosUUFBUU0sUUFBUUMsS0FBT0YsRUFBRUwsUUFBUU0sUUFBUUMsS0FDcEMsRUFFUEgsRUFBRUosUUFBUU0sUUFBUUMsS0FBT0YsRUFBRUwsUUFBUU0sUUFBUUMsTUFDbkMsRUFFTCxJQXdEWHhDLElBRUE0QixRQUFRYSxRQUFVaEIsRUFFbEJJLFVBQVVZLFFBQVUsV0FDaEJoQixJQUNBaEMsRUFBWU4sTUFBTXVELFFBQVUsUUFuR2hDekQiLCJmaWxlIjoic2ltcGxlLXByb2R1Y3QtdG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpbXBsZS1wcm9kdWN0LXRvdXInKSkge1xuICAgICAgICB0b3VyKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRvdXIoKSB7XG4gICAgICAgIHZhciB0b3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSxcbiAgICAgICAgICAgIHN0eWxlVXJsID0gXCJjc3Mvc2ltcGxlLXByb2R1Y3QtdG91ci5jc3NcIjtcbiAgICAgICAgdG91ci5jbGFzc05hbWUgPSAndG91ciBvdmVybGF5JztcbiAgICAgICAgdG91ci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInRvdXItbm90aWZ5XCIgaWQ9XCJub3RpZnlcIj48ZGl2IGNsYXNzPVwidG91ci1ub3RpZnktYWN0aW9uc1wiPjxidXR0b24gaWQ9XCJidG5OZXh0XCI+bmV4dDwvYnV0dG9uPjxidXR0b24gaWQ9XCJidG5GaW5pc2hcIiBoaWRkZW4+ZmluaXNoPC9idXR0b24+PC9kaXY+PC9kaXY+JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodG91cik7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnc3JjJywgc3R5bGVVcmwpO1xuICAgICAgICB0b3VyLnByZXBlbmQoc3R5bGUpO1xuXG5cbiAgICAgICAgdmFyIHRvdXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXkudG91cicpLFxuICAgICAgICAgICAgdG91ckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9pbnQnKSxcbiAgICAgICAgICAgIHNvcnRlZExpc3QgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbm90aWZ5TGlzdCA9IFtcbiAgICAgICAgICAgICAgICAnMS4gbm90aWZ5IG9uZScsXG4gICAgICAgICAgICAgICAgJzIuIG5vdGlmeSB0d28nLFxuICAgICAgICAgICAgICAgICczLiBub3RpZnkgdGhyZWUnXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgIHRvdXJMaXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgdmFyIG5ld0l0ZW0gPSAgbmV3IE9iamVjdChpdGVtKTtcbiAgICAgICAgICAgIHNvcnRlZExpc3QucHVzaChuZXdJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRlZExpc3QpO1xuXG4gICAgICAgIHNvcnRlZExpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS5uZXdJdGVtLmRhdGFzZXQuc3RlcCA+IGIubmV3SXRlbS5kYXRhc2V0LnN0ZXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLm5ld0l0ZW0uZGF0YXNldC5zdGVwIDwgYi5uZXdJdGVtLmRhdGFzZXQuc3RlcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBzaG93TmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRMaXN0Lmxlbmd0aCA+IDIgJiYgaSA+IDApIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWRMaXN0W2kgLSAxXS5pdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RvdXItcG9pbnQtc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPCBzb3J0ZWRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNvcnRlZExpc3RbaV0uaXRlbS5jbGFzc0xpc3QuYWRkKCd0b3VyLXBvaW50LXNob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc2VydE5vdGlmeShub3RpZnksIG5vdGlmeUxpc3RbaV0pO1xuICAgICAgICAgICAgcG9zaXRpb24obm90aWZ5LCBzb3J0ZWRMaXN0W2ldLml0ZW0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGFuY2gpIHtcbiAgICAgICAgICAgIHZhciBjb29yZCA9IGFuY2guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvcDogY29vcmQudG9wICsgcGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogY29vcmQubGVmdCArIHBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGFuY2hIZWlnaHQ6IGFuY2gub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGFuY2hXaWR0aDogYW5jaC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBwb3NpdGlvbihlbCwgYW5jaCkge1xuICAgICAgICAgICAgdmFyIGFuY2hDb29yZCA9IGdldENvb3JkaW5hdGVzKGFuY2gpLFxuICAgICAgICAgICAgICAgIGFuY2hTaXplcyA9ICcnO1xuICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IGFuY2hDb29yZC5sZWZ0ICsgYW5jaENvb3JkLmFuY2hXaWR0aCArIDEwICsgXCJweFwiO1xuICAgICAgICAgICAgZWwuc3R5bGUudG9wID0gYW5jaENvb3JkLnRvcCArIGFuY2hDb29yZC5hbmNoSGVpZ2h0IC8gMiAtIDE1ICsgXCJweFwiO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydE5vdGlmeShlbCwgdHh0KSB7XG4gICAgICAgICAgICBlbC5maXJzdENoaWxkLmRhdGEgPSB0eHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcblxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgICAgICAgIGlmIChpID09PSBzb3J0ZWRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNvcnRlZExpc3RbaSAtIDFdLml0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndG91ci1wb2ludC1zaG93Jyk7XG4gICAgICAgICAgICAgICAgYnRuTmV4dC5pbm5lckhUTUwgPSBcIm5leHRcIjtcbiAgICAgICAgICAgICAgICBidG5GaW5pc2guc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICBzaG93TmV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2hvd05leHQoKTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IHNvcnRlZExpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCJvbmNlIG1vcmVcIjtcbiAgICAgICAgICAgICAgICBidG5GaW5pc2gucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgc2hvd05leHQoKTtcblxuICAgICAgICBidG5OZXh0Lm9uY2xpY2sgPSBuZXh0O1xuXG4gICAgICAgIGJ0bkZpbmlzaC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB0b3VyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH07XG4gICAgfTtcbn07Il19
