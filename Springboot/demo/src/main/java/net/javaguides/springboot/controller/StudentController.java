package net.javaguides.springboot.controller;

import net.javaguides.springboot.bean.Student;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("students")
public class StudentController {
    // http://localhost:8080/student
    @GetMapping("/student")
    public ResponseEntity<Student> getStudent() {
        Student student = new Student(
                1,
                "Ramesh",
                "Fadatare"

        );
        return ResponseEntity.ok()
                .header("custom-header", "Hallo")
                .body(student);
    }

    @GetMapping("")
    public List<Student> getStudents(){
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "Ramesh", "FadaleckmichamArsch"));
        students.add(new Student(2, "umesh", "Fadalalalla"));
        students.add(new Student(3, "umesh", "qwe"));
        students.add(new Student(4, "ddff", "adsfadsf"));
        return students;
    }

    // Spring BOOT REST API with Path Variable
    // {id} - URI template variable
    // http://localhost:8080/students/1/Diego/Rapela
    @GetMapping("/{id}/{first-name}/{last-name}")
    public Student studentPathVariable(@PathVariable("id") int studentId,
                                       @PathVariable("first-name") String firstName,
                                       @PathVariable("last-name") String lastName){
        return new Student(studentId, firstName, lastName);
    }


    // Spring boot REST API with Request Param
    // http://localhost:8080/students/query?id=1&firstName=Rammbock&lastName=fahrhrad
    @GetMapping("/query")
    public Student studentRequestVariable(@RequestParam int id,
                                          @RequestParam String firstName,
                                          @RequestParam String lastName){
        return new Student(id, firstName, lastName);
    }


    // Spring boot REST PAI that handles HTTP POST request
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Student createStudent(@RequestBody Student student){
        // save into database
        System.out.println(student.getId());
        System.out.println(student.getFirstName());
        System.out.println(student.getLastName());
        return student;
    }


//    @PutMapping("students/update")
//    public ResponseEntity<Student> updateStudent(@RequestBody Student student){
//        Student studentLocal = new Student(3,"Rammbo", "Wambo");
//        if(student.getId() == studentLocal.getId()){
//            studentLocal.setFirstName(student.getFirstName());
//            studentLocal.setLastName((student.getLastName()));
//            return new ResponseEntity(studentLocal, HttpStatus.OK);
//        }
//        return new ResponseEntity("No Student found with id " + student.getId(), HttpStatus.NOT_FOUND);
//
//    }

    @PutMapping("/{id}/update")
    public Student updateStudent(@RequestBody Student student, @PathVariable("id") int studentId){
        System.out.println(student.getFirstName());
        System.out.println(student.getLastName());
        return student;
    }

    // Spring boot Rest API that handles HTTP DELETE Request - deleting the existing resource
    @DeleteMapping("/{id}/delete")
    public String deleteStudent(@PathVariable("id") int studentId){
        System.out.println(studentId);
        return "Student deleted succesffully!";
    }

}
