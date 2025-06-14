from rest_framework import serializers
from .models import Course, Student, Enrollment, Quiz, Certificate

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = '__all__'
