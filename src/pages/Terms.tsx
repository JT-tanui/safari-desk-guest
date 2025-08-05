import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Please read these Terms of Service carefully before using SafariDesk.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using SafariDesk ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-muted-foreground">
                  These Terms of Service ("Terms") govern your use of our website located at safiaridesk.com (the "Service") operated by SafariDesk Inc. ("us", "we", or "our").
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  SafariDesk provides project management and team collaboration tools through our web-based platform. The Service includes features such as task management, team communication, file sharing, project tracking, and reporting capabilities.
                </p>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  To access certain features of the Service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Immediately notifying us of any unauthorized use of your account</li>
                  <li>Providing accurate and complete information when creating your account</li>
                </ul>
                <p className="text-muted-foreground">
                  You must be at least 18 years old to create an account and use our Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Upload, post, or transmit any content that is illegal, harmful, or violates any laws</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li>Use the Service for any commercial purpose without our express written consent</li>
                  <li>Transmit any viruses, malware, or other malicious code</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Payment and Billing</h2>
                <p className="text-muted-foreground mb-4">
                  Certain features of the Service require payment of fees. You agree to pay all applicable fees as described on our pricing page. Payment obligations are non-cancelable and fees are non-refundable except as expressly stated in these Terms.
                </p>
                <p className="text-muted-foreground mb-4">
                  We may change our fees at any time by posting new fees on our website. Changes to fees will be effective immediately for new users and will take effect at the start of the next billing cycle for existing users.
                </p>
                <p className="text-muted-foreground">
                  If you fail to pay fees when due, we may suspend or terminate your access to the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
                <p className="text-muted-foreground mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of SafariDesk Inc. and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-muted-foreground mb-4">
                  You retain ownership of any content you submit, post, or display on or through the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, modify, and display such content in connection with providing the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
                <p className="text-muted-foreground">
                  By using our Service, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Data Security and Backup</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
                </p>
                <p className="text-muted-foreground">
                  You are responsible for maintaining your own backups of any critical data you store on our Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall SafariDesk Inc., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
                <p className="text-muted-foreground">
                  Our total liability to you for all claims arising from or relating to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the event giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-muted-foreground mb-4">
                  You may terminate your account at any time by contacting us or through your account settings.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the Service will cease immediately, and we may delete your account and all associated data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-muted-foreground">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground">
                  Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in San Francisco, California.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li>Email: legal@safiaridesk.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Business Street, San Francisco, CA 94107</li>
                </ul>
              </div>

              <div className="border-t pt-8">
                <p className="text-sm text-muted-foreground text-center">
                  By using SafariDesk, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
