module.exports = `<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Bootstrap FAQ example with tabs and accordions</title>
  
  
  <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
<link rel='stylesheet prefetch' href='https://files.krve.io/f/eyespot.css'>
<link rel='stylesheet prefetch' href='https://cdn.cloudcache.dk/materialdesignicons/1.6.50/css/materialdesignicons.min.css'>

<style>

.list-group.help-group {
  margin-bottom: 20px;
  padding-left: 0;
  margin: 0;
}
.list-group.help-group .faq-list {
  display: block;
  top: auto;
  margin: 0 0 32px;
  border-radius: 2px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
}
.list-group.help-group .faq-list .list-group-item {
  position: relative;
  display: block;
  margin: 0;
  padding: 13px 16px;
  background-color: #fff;
  border: 0;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: #616161;
  transition: background-color .2s;
}
.list-group.help-group .faq-list .list-group-item i.mdi {
  margin-right: 5px;
  font-size: 18px;
  position: relative;
  top: 2px;
}
.list-group.help-group .faq-list .list-group-item:hover {
  background-color: #f6f6f6;
}
.list-group.help-group .faq-list .list-group-item.active {
  background-color: #f6f6f6;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}
.list-group.help-group .faq-list .list-group-item:last-of-type {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom: 0;
}

.tab-content.panels-faq {
  padding: 0;
  border: 0;
}

.panel.panel-help {
  box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
  padding-bottom: 0;
  border-radius: 2px;
  overflow: hidden;
  background-color: #fff;
  margin: 0 0 16px;
}
.panel.panel-help a[href^="#"],
.panel.panel-help a[href^="#"]:hover,
.panel.panel-help a[href^="#"]:focus {
  outline: none;
  cursor: pointer;
  text-decoration: none;
}
.panel.panel-help .panel-heading {
  background-color: #f6f6f6;
  padding: 0 16px;
  line-height: 48px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  color: rgba(0, 0, 0, 0.87);
}
.panel.panel-help .panel-heading h2 {
  margin: 0;
  padding: 14px 0 14px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: none;
}
.panel.panel-help .panel-body {
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-radius: 2px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  margin-top: 0;
}
.panel.panel-help .panel-body p {
  margin: 0 0 16px;
}
.panel.panel-help .panel-body p:last-of-type {
  margin: 0;
}
</style>

  
</head>

<body>
  <div class="container">
  <div class="col-md-1">
    <ul class="list-group help-group">
    </ul>
  </div>
  <div class="col-md-10">
    <div class="tab-content panels-faq">
      <div class="tab-pane active" id="tab1">
        <div class="panel-group" id="help-accordion-1">
          <div class="panel panel-default panel-help">
            <a data-toggle="collapse" data-parent="#help-accordion-1">
              <div class="panel-heading">
                <h2>What's the calendar page and what's inside?</h2>
              </div>
            </a>
            <div id="opret-produkt" class="collapse in">
              <div class="panel-body">
                <p>The calendar page is used for students to add events onto their own calendar. Students can flip through the calendar to view different weeks with the 'Back' and 'Next' buttons. In order to create an event, the student needs to click a specifc time on the calendar and drag their mouse to the specifc time they'd want that even to last. Once the student chooses their time, they are then prompted with a text box to name that specifc event. At the top of the calendar students can view the specifc events added and when clicking on a specific event, that event will direct them to the specifc tim in the calendar.</p>
                <p>The Subjects at the top of the calendar page allow students to click on a specifc subject and direct them to a list of their assignments each with specific due dates.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default panel-help">
            <a data-toggle="collapse" data-parent="#help-accordion-1">
              <div class="panel-heading">
                <h2>What's the grades page and what's inside?</h2>
              </div>
            </a>
            <div id="rediger-produkt" class="collapse in">
              <div class="panel-body">
                <p>The grades page is used for students to view grades from multiple subjects. Grades are calculated from Homework's, Quiz's, and Exam's.</p>
                <p>When a student clicks on the grades page, they are shown a list of subjects they are taking, each with a grade percentage right next to that specific subject. When a student clicks on a specifc subject, they are directed to a list of grades recieved from that class. In this screen, student's can click on a specifc assignment with the 'View Details' button and view details of that assignment as well as the teacher's feedback.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default panel-help">
            <a data-toggle="collapse" data-parent="#help-accordion-1">
              <div class="panel-heading">
                <h2>How to turn in assignments?</h2>
              </div>
            </a>
            <div id="ret-pris" class="collapse in">
              <div class="panel-body">
                <p>In order to turn in assignments, the student needs to press the 'Turn in Work' button on the home page, the student will then be directed to the assignments page where the student would then need to click on a specifc subject they'd like to turn their assignment in. Once the student clicks on that subject, the student would then need to find which assignment they'd like to turn in and then press the 'Submit Assignment' button at the right of that assignment. The student will then need to browse through their computer files and find where their assignment is located on their system. Once the student finds their assignment, the student would then need to press 'Submit' in order to upload their assignment. The student can type in additional notes is necessary right under their file(s) and then finally press the 'Submit' button under the additional notes to submit that assignment.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default panel-help">
            <a data-toggle="collapse" data-parent="#help-accordion-1">
              <div class="panel-heading">
                <h2>How to view details of an assignment?</h2>
              </div>
            </a>
            <div id="slet-produkt" class="collapse in">
              <div class="panel-body">
                <p>In order to view deatails of an assignment the student should click on the 'Grades' button at the home page. The student will then need to click on a specifc subject. After the student clicks on a specifc subject, the student will then see a list of assignments completed and graded by the teacher. The student can choose a specifc graded assignment by clicking on the 'View Details' button on the right of the assignment. Once the student clicks that button, the student will then see their graded assignment at the left of the page and the teacher's feedback on the right of the page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="tab2">
        <div class="panel-group" id="help-accordion-2">      
          <div class="panel panel-default panel-help">
            <a data-toggle="collapse" data-parent="#help-accordion-2">
              <div class="panel-heading">
                <h2>Lorem ipsum?</h2>
              </div>
            </a>
            <div id="help-three" class="collapse in">
              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!</p>
                <p><strong>Example: </strong>Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</div>
  <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'></script>
<script src="js/index.js"></script>

</body>
</html>`;
