<template>
    <div class="container">
      <div class="upperInfo">
        <div>
          <h1 ref="hd1">Kalendar</h1>
          <h4>učenik</h4>
        </div>
        <LogoutBtn />
      </div>

      <div id="caleandar">

      </div>

    </div>
</template>

<script>
export default {
  mounted(){
    var Calendar = function(model, options, date){
      // Default Values
      this.Options = {
        Color: '',
        LinkColor: '',
        NavShow: true,
        NavVertical: false,
        NavLocation: '',
        DateTimeShow: true,
        DateTimeFormat: 'mmm, yyyy',
        DatetimeLocation: '',
        EventClick: '',
        EventTargetWholeDay: false,
        DisabledDays: [],
        ModelChange: model
      };
      // Overwriting default values
      for(var key in options){
        this.Options[key] = typeof options[key]=='string'?options[key].toLowerCase():options[key];
      }

      model?this.Model=model:this.Model={};
      this.Today = new Date();

      this.Selected = this.Today
      this.Today.Month = this.Today.getMonth();
      this.Today.Year = this.Today.getFullYear();
      if(date){this.Selected = date}
      this.Selected.Month = this.Selected.getMonth();
      this.Selected.Year = this.Selected.getFullYear();

      this.Selected.Days = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDate();
      this.Selected.FirstDay = new Date(this.Selected.Year, (this.Selected.Month), 1).getDay();
      this.Selected.LastDay = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDay();

      this.Prev = new Date(this.Selected.Year, (this.Selected.Month - 1), 1);
      if(this.Selected.Month==0){this.Prev = new Date(this.Selected.Year-1, 11, 1);}
      this.Prev.Days = new Date(this.Prev.getFullYear(), (this.Prev.getMonth() + 1), 0).getDate();
    };

    function createCalendar(calendar, element, adjuster){
      if(typeof adjuster !== 'undefined'){
        var newDate = new Date(calendar.Selected.Year, calendar.Selected.Month + adjuster, 1);
        calendar = new Calendar(calendar.Model, calendar.Options, newDate);
        element.innerHTML = '';
      }else{
        for(var key in calendar.Options){
          typeof calendar.Options[key] != 'function' && typeof calendar.Options[key] != 'object' && calendar.Options[key]?element.className += " " + key + "-" + calendar.Options[key]:0;
        }
      }
      var months = ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"];

      function AddSidebar(){
        var sidebar = document.createElement('div');
        sidebar.className += 'cld-sidebar';

        var monthList = document.createElement('ul');
        monthList.className += 'cld-monthList';

        for(var i = 0; i < months.length - 3; i++){
          var x = document.createElement('li');
          x.className += 'cld-month';
          var n = i - (4 - calendar.Selected.Month);
          // Account for overflowing month values
          if(n<0){n+=12;}
          else if(n>11){n-=12;}
          // Add Appropriate Class
          if(i==0){
            x.className += ' cld-rwd cld-nav';
            x.addEventListener('click', function(){
              typeof calendar.Options.ModelChange == 'function'?calendar.Model = calendar.Options.ModelChange():calendar.Model = calendar.Options.ModelChange;
              createCalendar(calendar, element, -1);});
            x.innerHTML += '<svg height="15" width="15" viewBox="0 0 100 75" fill="rgba(255,255,255,0.5)"><polyline points="0,75 100,75 50,0"></polyline></svg>';
          }
          else if(i==months.length - 4){
            x.className += ' cld-fwd cld-nav';
            x.addEventListener('click', function(){
              typeof calendar.Options.ModelChange == 'function'?calendar.Model = calendar.Options.ModelChange():calendar.Model = calendar.Options.ModelChange;
              createCalendar(calendar, element, 1);} );
            x.innerHTML += '<svg height="15" width="15" viewBox="0 0 100 75" fill="rgba(255,255,255,0.5)"><polyline points="0,0 100,0 50,75"></polyline></svg>';
          }
          else{
            if(i < 4){x.className += ' cld-pre';}
            else if(i > 4){x.className += ' cld-post';}
            else{x.className += ' cld-curr';}

            //prevent losing var adj value (for whatever reason that is happening)
            (function () {
              var adj = (i-4);
              //x.addEventListener('click', function(){createCalendar(calendar, element, adj);console.log('kk', adj);} );
              x.addEventListener('click', function(){
                typeof calendar.Options.ModelChange == 'function'?calendar.Model = calendar.Options.ModelChange():calendar.Model = calendar.Options.ModelChange;
                createCalendar(calendar, element, adj);} );
              x.setAttribute('style', 'opacity:' + (1 - Math.abs(adj)/4));
              x.innerHTML += months[n].substr(0,3);
            }()); // immediate invocation

            if(n==0){
              var y = document.createElement('li');
              y.className += 'cld-year';
              if(i<5){
                y.innerHTML += calendar.Selected.Year;
              }else{
                y.innerHTML += calendar.Selected.Year + 1;
              }
              monthList.appendChild(y);
            }
          }
          monthList.appendChild(x);
        }
        sidebar.appendChild(monthList);
        if(calendar.Options.NavLocation){
          document.getElementById(calendar.Options.NavLocation).innerHTML = "";
          document.getElementById(calendar.Options.NavLocation).appendChild(sidebar);
        }
        else{element.appendChild(sidebar);}
      }

      var mainSection = document.createElement('div');
      mainSection.className += "cld-main";

      function AddDateTime(){
          var datetime = document.createElement('div');
          datetime.className += "cld-datetime";
          if(calendar.Options.NavShow && !calendar.Options.NavVertical){
            var rwd = document.createElement('div');
            rwd.className += " cld-rwd cld-nav";
            rwd.addEventListener('click', function(){createCalendar(calendar, element, -1);} );
            rwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,50 75,0 75,100"></polyline></svg>';
            datetime.appendChild(rwd);
          }
          var today = document.createElement('div');
          today.className += 'today head_today';
          today.innerHTML = months[calendar.Selected.Month] + ", " + calendar.Selected.Year;
          datetime.appendChild(today);
          if(calendar.Options.NavShow && !calendar.Options.NavVertical){
            var fwd = document.createElement('div');
            fwd.className += " cld-fwd cld-nav";
            fwd.addEventListener('click', function(){createCalendar(calendar, element, 1);} );
            fwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,0 75,50 0,100"></polyline></svg>';
            datetime.appendChild(fwd);
          }
          if(calendar.Options.DatetimeLocation){
            document.getElementById(calendar.Options.DatetimeLocation).innerHTML = "";
            document.getElementById(calendar.Options.DatetimeLocation).appendChild(datetime);
          }
          else{mainSection.appendChild(datetime);}
      }

      function AddLabels(){
        var labels = document.createElement('ul');
        labels.className = 'cld-labels';
        var labelsList = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];
        for(var i = 0; i < labelsList.length; i++){
          var label = document.createElement('li');
          label.className += "cld-label";
          label.innerHTML = labelsList[i];
          labels.appendChild(label);
        }
        mainSection.appendChild(labels);
      }
      function AddDays(){
        // Create Number Element
        function DayNumber(n){
          var number = document.createElement('p');
          number.className += "cld-number";
          number.innerHTML += n;
          return number;
        }
        var days = document.createElement('ul');
        days.className += "cld-days";
        // Previous Month's Days
        for(var i = 0; i < (calendar.Selected.FirstDay); i++){
          var day = document.createElement('li');
          day.className += "cld-day prevMonth";
          //Disabled Days
          var d = i%7;
          for(var q = 0; q < calendar.Options.DisabledDays.length; q++){
            if(d==calendar.Options.DisabledDays[q]){
              day.className += " disableDay";
            }
          }

          var number = DayNumber((calendar.Prev.Days - calendar.Selected.FirstDay) + (i+1));
          day.appendChild(number);

          days.appendChild(day);
        }
        // Current Month's Days
        for(let i = 0; i < calendar.Selected.Days; i++){
          let day = document.createElement('li');
          day.className += "cld-day currMonth";
          //Disabled Days
          let d = (i + calendar.Selected.FirstDay)%7;
          for(let q = 0; q < calendar.Options.DisabledDays.length; q++){
            if(d==calendar.Options.DisabledDays[q]){
              day.className += " disableDay";
            }
          }
          let number = DayNumber(i+1);
          // Check Date against Event Dates
          for(var n = 0; n < calendar.Model.length; n++){
            var evDate = calendar.Model[n].Date;
            var toDate = new Date(calendar.Selected.Year, calendar.Selected.Month, (i+1));
            if(evDate.getTime() == toDate.getTime()){
              number.className += " eventday";
              var title = document.createElement('span');
              title.className += "cld-title";
              if(typeof calendar.Model[n].Link == 'function' || calendar.Options.EventClick){
                var a = document.createElement('a');
                a.setAttribute('href', '#');
                a.innerHTML += calendar.Model[n].Title;
                if(calendar.Options.EventClick){
                  var z = calendar.Model[n].Link;
                  if(typeof calendar.Model[n].Link != 'string'){
                      a.addEventListener('click', calendar.Options.EventClick.bind.apply(calendar.Options.EventClick, [null].concat(z)) );
                      if(calendar.Options.EventTargetWholeDay){
                        day.className += " clickable";
                        day.addEventListener('click', calendar.Options.EventClick.bind.apply(calendar.Options.EventClick, [null].concat(z)) );
                      }
                  }else{
                    a.addEventListener('click', calendar.Options.EventClick.bind(null, z) );
                    if(calendar.Options.EventTargetWholeDay){
                      day.className += " clickable";
                      day.addEventListener('click', calendar.Options.EventClick.bind(null, z) );
                    }
                  }
                }else{
                  a.addEventListener('click', calendar.Model[n].Link);
                  if(calendar.Options.EventTargetWholeDay){
                    day.className += " clickable";
                    day.addEventListener('click', calendar.Model[n].Link);
                  }
                }
                title.appendChild(a);
              }else{
                title.innerHTML += '<a href="' + calendar.Model[n].Link + '">' + calendar.Model[n].Title + '</a>';
              }
              number.appendChild(title);
            }
          }
          day.appendChild(number);
          // If Today..
          if((i+1) == calendar.Today.getDate() && calendar.Selected.Month == calendar.Today.Month && calendar.Selected.Year == calendar.Today.Year){
            day.className += " today";
          }
          days.appendChild(day);
        }
        // Next Month's Days
        // Always same amount of days in calander
        var extraDays = 13;
        if(days.children.length>35){extraDays = 6;}
        else if(days.children.length<29){extraDays = 20;}

        for(let i = 0; i < (extraDays - calendar.Selected.LastDay); i++){
          let day = document.createElement('li');
          day.className += "cld-day nextMonth";
          //Disabled Days
          let d = (i + calendar.Selected.LastDay + 1)%7;
          for(let q = 0; q < calendar.Options.DisabledDays.length; q++){
            if(d==calendar.Options.DisabledDays[q]){
              day.className += " disableDay";
            }
          }

          let number = DayNumber(i+1);
          day.appendChild(number);

          days.appendChild(day);
        }
        mainSection.appendChild(days);
      }
      if(calendar.Options.Color){
        mainSection.innerHTML += '<style>.cld-main{color:' + calendar.Options.Color + ';}</style>';
      }
      if(calendar.Options.LinkColor){
        mainSection.innerHTML += '<style>.cld-title a{color:' + calendar.Options.LinkColor + ';}</style>';
      }
      element.appendChild(mainSection);

      if(calendar.Options.NavShow && calendar.Options.NavVertical){
        AddSidebar();
      }
      if(calendar.Options.DateTimeShow){
        AddDateTime();
      }
      AddLabels();
      AddDays();
    }

    function caleandar(el, data, settings){
      var obj = new Calendar(data, settings);
      createCalendar(obj, el);
    }

    var events = [
      // {'Date': new Date(2022, 5, 7), 'Title': 'Digitalna Logika - Monostabil'},
       {'Date': new Date(2022, 5, 12), 'Title': 'Vježba 12 (Fizika)', 'Link': 'https://garfield.com'},
      // {'Date': new Date(2022, 5, 13), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
    ];
    var settings = {};
    var element = document.getElementById('caleandar');
    caleandar(element, events, settings);

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

h1, h4{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
}
h1{
  font-size: 35px;
  line-height: 50px;
  letter-spacing: 0.02em;
  color: white;
}
h4{
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--main_yellow);
  margin-bottom: 40px;
}
.container{
  max-width: 990px;
}
</style>

<style>
/* KALENDAR */

.cld-main{
  max-width: 880px;
  background-color: var(--light_black);
  border-radius: 10px;
}
.cld-main a{
  color: #333;
  font-weight: bold;
}
.cld-datetime{
  position: relative;
  width: 66%;
  min-width: 100px;
  max-width: 300px;
  margin: auto;
  overflow: hidden;

  display: flex;
  align-items: center;
  padding: 28px 0px;
}
.cld-datetime .today{
  position: relative;
  float: left;
  width: calc(100% - 40px);
  margin: auto;
  text-align: center;
}
.head_today{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 188%;
  text-align: center;
  color: var(--main_yellow);
}
polyline{
  fill: white;
  margin-top: 5px;
}
polyline:hover{
  fill: var(--main_yellow);
  transform: scale(0.9)
}
.cld-nav{
  position: relative;
  width: 20px;
  height: 20px;
  margin-top: 2px;
}
.cld-nav:hover{
  cursor: pointer;
}
.cld-nav:hover svg{
  fill: #666;
}
.cld-rwd{
  float: left;
}
.cld-fwd{
  float: right;
}
.cld-nav svg:hover{
}
.cld-labels{
  padding-bottom: 24px;
}
.cld-labels, .cld-days{
  margin-left: 60px;
}
.cld-label{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;

  text-align: left;
  color: #FFFFFF;

  opacity: 0.6;
}
.cld-label, .cld-day{
  display: inline-block;
  width: 14.28%;
  text-align: left;
}
.cld-label:last-child{
  width: auto;
  padding-right: 18px;
}
.cld-day{
  padding-bottom: 10px;
}
/*
height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #666;
  color: #fff;
*/
.cld-day.today .cld-number{
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: rgb(246, 215, 66, 0.5);
  font-weight: 700;
}
.cld-day.disableDay{
  opacity: 0.5;
}
.cld-day.nextMonth, .cld-day.prevMonth{
  opacity: 0.33;
}
.cld-number{
  position: relative;
  margin: 5px;
  padding: 5px;
  font-size: 18px;
}
.cld-title{
  position: absolute;
  z-index: 5;
  display: none;
  top: 30px;
  left: 0;
  padding: 5px 10px;
  background: #fff;
  white-space: nowrap;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
}
.cld-number:hover .cld-title{
  display: block;
}
.cld-title::before{
  content: '';
  position: absolute;
  top: -7.5px; left: 7.5px;
  width: 0;
  height: 0;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-bottom: 7.5px solid #ccc;
}
.cld-number.eventday{
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  border: 1px solid #999;
}
.cld-number.eventday:hover{
  cursor: pointer;
  background: #eee;
}
.today .cld-number.eventday:hover{
  background: #888;
}
</style>