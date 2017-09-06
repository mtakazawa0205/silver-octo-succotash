$('#calendar').fullCalendar
({dayClick: function(date)
    {if($(this).hasClass("clicked")){ // クリックされた要素がclickedクラスだったら
        $(this).removeClass("clicked");}
        else{$(this).addClass("clicked");}}});


        $('#calendar').fullcalendar
        ({viewRender: function(currentView){
                      var minDate = moment(),
                      maxDate = moment().add(12,'months');
                      // Past
                      if (minDate >= currentView.start && minDate <= currentView.end) {
                          $(".fc-prev-button").prop('disabled', true);
                          $(".fc-prev-button").addClass('fc-state-disabled');
                      }
                      else {
                          $(".fc-prev-button").removeClass('fc-state-disabled');
                          $(".fc-prev-button").prop('disabled', false);
                      }
                      // Future
                      if (maxDate >= currentView.start && maxDate <= currentView.end) {
                          $(".fc-next-button").prop('disabled', true);
                          $(".fc-next-button").addClass('fc-state-disabled');
                      } else {
                          $(".fc-next-button").removeClass('fc-state-disabled');
                          $(".fc-next-button").prop('disabled', false);
                      }}});
