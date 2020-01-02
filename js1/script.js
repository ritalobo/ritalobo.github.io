$(window).scroll(function(){

      if ($(".t1").visible(true)) {
          $("#um").addClass("width-100");
        } else {
          $("#um").removeClass("width-100");
        }

        if ($(".t2").visible(true)) {
            $("#dois").addClass("width-100");
          } else {
            $("#dois").removeClass("width-100");
          }

          if ($(".t3").visible(true)) {
              $("#tres").addClass("width-100");
            } else {
              $("#tres").removeClass("width-100");
            }

            if ($(".t4").visible(true)) {
                $("#quatro").addClass("width-100");
              } else {
                $("#quatro").removeClass("width-100");
              }

              if ($(".t1").visible(true)) {
              $("#progress").addClass("height-25");
            } else {
              $("#progress").removeClass("height-25");
            }

            if ($(".t2").visible(true)) {
                $("#progress").addClass("height-50");
              } else {
                $("#progress").removeClass("height-50");
              }

              if ($(".t3").visible(true)) {
                  $("#progress").addClass("height-75");
                } else {
                  $("#progress").removeClass("height-75");
                }

                if ($(".t4").visible(true)) {
                    $("#progress").addClass("height-100");
                  } else {
                    $("#progress").removeClass("height-100");
                  }

});
