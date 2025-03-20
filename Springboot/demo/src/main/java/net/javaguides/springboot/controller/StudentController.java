package net.javaguides.springboot.controller;

import net.javaguides.springboot.bean.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    // http://localhost:8080/student
    @GetMapping("/student")
    public Student getStudent() {
        Student student = new Student(
                1,
                "Ramesh",
                "Fadatare"

        );
        return student;
    }

    @GetMapping("students")
    public List<Student> getStudents(){
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "Ramesh", "FadaleckmichamArsch"));
        students.add(new Student(2, "umesh", "Fadalalalla"));
        students.add(new Student(3, "umesh", "qwe"));
        students.add(new Student(4, "ddff", "adsfadsf"));
        return students;
    }
}
