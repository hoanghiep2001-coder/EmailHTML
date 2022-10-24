var Home = (function () {
  return {
    init: function () {
      // this.customDateRangePicker()
      // this.customDatePicker()
    },
    onSomething: function () {},
    customDateRangePicker: function () {
      this.dateRangeOfForm()
    },
    customDatePicker: function () {
      // custom date 1 in body
      this.dateAlwaysOpen1();

      // custom date 2
      this.dateAlwaysOpen2();

      // scroll to list ticket when date 2 is selected
      this.scrollToListTicket();

      // compare date 1 with date 2 - Validate
      this.compareTimeOfDate();
    },
    dateRangeOfForm: function () {

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth()).padStart(2, '0'); 
      var yyyy = today.getFullYear();

      let $dt1 = $('input.startDate').datepicker({
        dateFormat: "dd-mm-yy",
        dayNames: [ "Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7" ],
        dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        monthNames: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
        firstDay: 1,
        showOtherMonths: true,
        gotoCurrent: true,
        autoSize: true,
        hideIfNoPrevNext: true,
        minDate: new Date(yyyy, mm, dd),
        onSelect: function (String , Object) {

          let selectedDate = $dt1.datepicker('getDate');
          let selectedMonth = Object.currentMonth

          selectedDate.setDate(selectedDate.getDate() + 1)

          $dt2.datepicker('option', 'minDate', selectedDate)
          $dt2.datepicker('option', 'gotoCurrent', selectedMonth)
        },
        // onUpdateDatepicker : function(Object) {
        //     let $this = Object.dpDiv
        //     let $td = $this.find(`table tbody td`)

        //     $($td).each(function (index, element) {
        //       // element == this
        //       let $this = $(this)
        //       let $date = $this.find('a.ui-state-default').text()

        //       let compareKeyStorage = localStorage.getItem('date-picker-currentDate')
        //       let $dateNumber = `${Number($date)}${$($this).data("month")}${$($this).data("year")}`

        //       // console.log(Number(compareKeyStorage), Number($dateNumber) )

        //       // console.log(`${Number($date)}${$($this).data("month")}${$($this).data("year")}`)
              
              
        //       if($($this).data("month")) {
                
        //         } 
        //           if(Number(compareKeyStorage) > Number($dateNumber) ) {
        //             $($td[index]).addClass('ui-datepicker-unselectable ui-state-disabled')
        //           } else {
        //             $($td[index]).removeClass('ui-datepicker-unselectable ui-state-disabled')
        //           }

        //     });

        // }
      });
      var $dt2 = $('input.endDate').datepicker({
        dateFormat: "dd-mm-yy",
        dayNames: [ "Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7" ],
        dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        monthNames: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
        firstDay: 1,
        showOtherMonths: true,
        autoSize: true,
        hideIfNoPrevNext: true,
      });

      $('input#one-way-Date').datepicker({
        dateFormat: "dd-mm-yy",
        dayNames: [ "Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7" ],
        dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        monthNames: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
        firstDay: 1,
        showOtherMonths: true,
        autoSize: true,
        hideIfNoPrevNext: true,
        minDate: new Date(yyyy, mm, dd),
      });


      let modalDt1 = $('input#modal_leaveDate').datepicker({
        dateFormat: "dd-mm-yy",
        dayNames: [ "Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7" ],
        dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        monthNames: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
        firstDay: 1,
        showOtherMonths: true,
        autoSize: true,
        hideIfNoPrevNext: true,
        minDate: new Date(yyyy, mm, dd),
        onSelect: function (String , Object) {
          
          let selectedDate = modalDt1.datepicker('getDate');
          let selectedMonth = Object.currentMonth
          
          selectedDate.setDate(selectedDate.getDate() + 1)
          
          modalDt2.datepicker('option', 'minDate', selectedDate)
          modalDt2.datepicker('option', 'gotoCurrent', selectedMonth)
        },
      });
      var modalDt2 = $('input#modal_comebackDate').datepicker({
        dateFormat: "dd-mm-yy",
        dayNames: [ "Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7" ],
        dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        monthNames: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
        firstDay: 1,
        showOtherMonths: true,
        autoSize: true,
        hideIfNoPrevNext: true,
      });
    },
    dateAlwaysOpen1: function () {
      $("#date1").dateRangePicker({
        singleDate: true,
        hoveringTooltip: false,
        separator: " to ",
        startDate: new Date(),
        alwaysOpen: true,
        showShortcuts: false,
        singleMonth: true,
        hoveringTooltip: false,
        startOfWeek: "monday",
        showDateFilter: function (time, date) {
          var day = new Date(time);
          var ngayAm = getLunarDate(
            day.getDate(),
            day.getMonth() + 1,
            day.getFullYear()
          );
          var str = `
                <div class="custom-date-picker">
                  <h3>${date}</h3>
                  <span class="lunar-day">${
                    ngayAm.day == "1"
                      ? ngayAm.day + "/" + ngayAm.month
                      : ngayAm.day
                  }
                  </span>
                </div>
                
                <p class="price">${Math.round(Math.random() * 9999)}.000đ</p>`;
          return str;
        },
        selectForward: true,
        customArrowPrevSymbol: '<span class="icon-arrow-left1"></span>',
        customArrowNextSymbol: '<span class="icon-arrow-right"></span>',
      });
    },
    dateAlwaysOpen2: function () {
      var dateRangePicker2 = $("#date2").dateRangePicker({
        startDate: new Date(),
        selectForward: true,
        singleDate: true,
        hoveringTooltip: false,
        separator: " to ",
        alwaysOpen: true,
        showShortcuts: false,
        singleMonth: true,
        hoveringTooltip: false,
        startOfWeek: "monday",
        showDateFilter: function (time, date) {
          var day = new Date(time);
          var ngayAm = getLunarDate(
            day.getDate(),
            day.getMonth() + 1,
            day.getFullYear()
          );
          var str = `
                <div class="custom-date-picker">
                  <h3>${date}</h3>
                  <span class="lunar-day">${
                    ngayAm.day == "1"
                      ? ngayAm.day + "/" + ngayAm.month
                      : ngayAm.day
                  }
                  </span>
                </div>
                
                <p class="price">${Math.round(Math.random() * 9999)}.000đ</p>`;
          return str;
        },
        selectForward: true,
        customArrowPrevSymbol: '<span class="icon-arrow-left1"></span>',
        customArrowNextSymbol: '<span class="icon-arrow-right"></span>',
      });

      $("#date1")
      .dateRangePicker()
      .bind("datepicker-first-date-selected", function (event, obj) {

        dateRangePicker2.dateRangePicker({
          startDate: obj.date1.getDate()
        })

        $(".date-picker-wrapper")
          .first()
          .click(function (e) {
            let selectedTimeOfDate1 = obj.date1.getTime();

            let date2Container = $(".date-picker-wrapper").last();
            let date2Next = date2Container.find(".next");
            let date2Prev = date2Container.find(".prev");

            let date2TdTime = date2Container.find(".day.toMonth");
            let date2TimeCompared = date2TdTime.map(function (index) {
              return $(this).attr("time");
            });

            $(date2Next).click(function (e) {
              e.stopPropagation();
              let date2TdTime = date2Container.find(".day.toMonth");
              let date2TimeCompared = date2TdTime.map(function (index) {
                return $(this).attr("time");
              });

              let $title = $(date2).find(".custom-title-daterange p");
              let $date2FirstPlace = $(date2).find(".first-place");
              let $date2SecondPlace = $(date2).find(".second-place");

              $($title).text("Về");
              $($date2FirstPlace).text("Huế -");
              $($date2SecondPlace).text("Hà Nội");

              $(date2TimeCompared).each(function (index, element) {
                // element == this

                if (selectedTimeOfDate1 > Number(element)) {
                  $(date2TdTime[index]).removeClass("valid");
                  $(date2TdTime[index]).addClass("invalid");
                }
                if (selectedTimeOfDate1 < Number(element)) {
                  $(date2TdTime[index]).removeClass("invalid");
                  $(date2TdTime[index]).addClass("valid");
                }
              });
            });

            $(date2Prev).click(function (e) {
              e.preventDefault();
              let date2TdTime = date2Container.find(".day.toMonth");
              let date2TimeCompared = date2TdTime.map(function (index) {
                return $(this).attr("time");
              });

              let $title = $(date2).find(".custom-title-daterange p");
              let $date2FirstPlace = $(date2).find(".first-place");
              let $date2SecondPlace = $(date2).find(".second-place");

              $($title).text("Về");
              $($date2FirstPlace).text("Huế -");
              $($date2SecondPlace).text("Hà Nội");

              $(date2TimeCompared).each(function (index, element) {
                // element == this

                if (selectedTimeOfDate1 > Number(element)) {
                  $(date2TdTime[index]).removeClass("valid");
                  $(date2TdTime[index]).addClass("invalid");
                }
                if (selectedTimeOfDate1 < Number(element)) {
                  $(date2TdTime[index]).removeClass("invalid");
                  $(date2TdTime[index]).addClass("valid");
                }
              });
            });

            $(date2TimeCompared).each(function (index, element) {
              // element == this

              if (selectedTimeOfDate1 > Number(element)) {
                $(date2TdTime[index]).removeClass("valid");
                $(date2TdTime[index]).addClass("invalid");
              }
              if (selectedTimeOfDate1 < Number(element)) {
                $(date2TdTime[index]).removeClass("invalid");
                $(date2TdTime[index]).addClass("valid");
              }

              if (!Number(element) === selectedTimeOfDate1) {
                $(date2Next).trigger("click");
              }
            });
          });

        $("#form-list-1").fadeOut("slow");
        setTimeout(function hideListFly() {
          $("#form-list-1").fadeIn("slow");
        }, 2000);

        $(".fly-info-loading").fadeIn("slow");
        setTimeout(function hideLoadingAnimate() {
          $(".fly-info-loading").fadeOut("slow");
        }, 1800);
      });

    },
    scrollToListTicket: function () {
      $("#date2")
        .dateRangePicker()
        .bind("datepicker-change", function (event, obj) {
          $("html, body").animate(
            {
              scrollTop: $("#form-list-1").offset().top - 300,
            },
            1500
          );
        });
    },
    compareTimeOfDate: function () {
      let date2 = $("body").children(".date-picker-wrapper").eq(1);
      let date1 = $("body").children(".date-picker-wrapper").eq(0);
      let $date2FirstPlace = $(date2).find(".first-place");
      let $date2SecondPlace = $(date2).find(".second-place");
      let $title = $(date2).find(".custom-title-daterange p");
      // let $date2FirstPlace = $(date2).find('.first-place')
      // let $date2SecondPlace = $(date2).find('.second-place')

      $(date2).css({ "margin-left": "16px", "margin-top": "20px", });
      $(date1).css({ "margin-top": "20px", });
      $($title).text("Về");

      $($date2FirstPlace).text("Huế -");
      $($date2SecondPlace).text("Hà Nội");
      // $($date2FirstPlace).text("Huế -")
      // $($date2SecondPlace).text("Hà Nội")

       $('#date2')
       .dateRangePicker()
       .bind('datepicker-first-date-selected', function(event, obj)
       {
        let date2NextBtn = date2.find('.next')
        let date2PrevBtn = date2.find('.prev')

        $(date2NextBtn).click(function (e) {
          e.preventDefault();
          console.log($title)
          $($title).text("Về")
        });
  
        $(date2PrevBtn).click(function (e) {
          e.preventDefault();
          $($title).text("Về")
        });

       }) 
    },
  };
})();

$(function () {
  Home.init();
});
