from rest_framework import viewsets
from .models import Course, Student, Enrollment, Quiz, Certificate
from .serializers import CourseSerializer, StudentSerializer, EnrollmentSerializer, QuizSerializer, CertificateSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from reportlab.pdfgen import canvas
from django.core.files.base import ContentFile
from io import BytesIO

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class CertificateViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer

@api_view(['POST'])
def generate_certificate(request):
    student_id = request.data.get('student')
    course_id = request.data.get('course')

    student = Student.objects.get(id=student_id)
    course = Course.objects.get(id=course_id)

    buffer = BytesIO()
    p = canvas.Canvas(buffer)
    p.drawString(100, 750, f"Certificate of Completion")
    p.drawString(100, 730, f"This is to certify that {student.name}")
    p.drawString(100, 710, f"has successfully completed the course {course.title}")
    p.save()

    buffer.seek(0)
    cert = Certificate(student=student, course=course)
    cert.pdf.save(f"{student.name}_certificate.pdf", ContentFile(buffer.read()))
    cert.save()

    return Response({"message": "Certificate generated!"})
