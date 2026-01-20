import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Upload } from 'lucide-react';

interface ApplicationFormProps {
    defaultRole?: string;
    className?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ defaultRole, className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    countryCode: '+92',
    email: '',
    role: '',
    experience: '',
    details: ''
  });

  useEffect(() => {
      if(defaultRole) {
          setFormData(prev => ({...prev, role: defaultRole}));
      }
  }, [defaultRole]);


  // Determine API base URL: local for dev, production URL for live
  // Note: For Railway, you will need to replace this with your actual deployed backend URL
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const formDataPayload = new FormData();
        formDataPayload.append('name', formData.name);
        formDataPayload.append('contact', formData.contact);
        formDataPayload.append('countryCode', formData.countryCode);
        formDataPayload.append('email', formData.email);
        formDataPayload.append('role', formData.role);
        formDataPayload.append('experience', formData.experience);
        formDataPayload.append('details', formData.details);
        
        if (fileInputRef.current?.files?.[0]) {
            formDataPayload.append('resume', fileInputRef.current.files[0]);
        }

        const res = await fetch(`${API_URL}/api/send-email`, {
            method: 'POST',
            body: formDataPayload, // Content-Type is set automatically for FormData
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Failed to submit application');
        }

        toast.success("Application submitted successfully! Please check your email for confirmation.");
        setFormData({ name: '', contact: '', countryCode: '+92', email: '', role: '', experience: '', details: '' });
        setFileName("No file chosen");
        if(fileInputRef.current) fileInputRef.current.value = '';

    } catch (err: unknown) {
        console.error('Send error:', err);
        const message = err instanceof Error ? err.message : String(err);
        toast.error(`Failed to submit application: ${message}`);
    } finally {
        setIsSubmitting(false);
    }
  };

  /* Removed sendAutoReply as it's now handled by the backend */
  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
          setFileName(file.name);
      }
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
      setFormData(prev => ({ ...prev, role: value }));
  };

  const handleCountryCodeChange = (value: string) => {
      setFormData(prev => ({ ...prev, countryCode: value }));
  };

  return (
    <div className={`glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md bg-black/40 ${className}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">Name</Label>
                <Input 
                    id="name" 
                    required 
                    placeholder="Enter your full name" 
                    className="bg-muted/50 border-white/10 focus:border-primary/50"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="contact" className="text-foreground/80">Contact Number</Label>
                <div className="flex gap-2">
                    <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                        <SelectTrigger className="w-[100px] sm:w-[120px] bg-muted/50 border-white/10 focus:border-primary/50">
                            <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="+92">🇵🇰 +92</SelectItem>
                            <SelectItem value="+1">🇺🇸 +1</SelectItem>
                            <SelectItem value="+44">🇬🇧 +44</SelectItem>
                            <SelectItem value="+971">🇦🇪 +971</SelectItem>
                            <SelectItem value="+91">🇮🇳 +91</SelectItem>
                            <SelectItem value="+61">🇦🇺 +61</SelectItem>
                            <SelectItem value="+1">🇨🇦 +1</SelectItem>
                            <SelectItem value="+49">🇩🇪 +49</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input 
                        id="contact" 
                        type="tel" 
                        required 
                        placeholder="300 1234567" 
                        className="flex-1 bg-muted/50 border-white/10 focus:border-primary/50"
                        value={formData.contact}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">Email</Label>
                <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="Enter your email address" 
                    className="bg-muted/50 border-white/10 focus:border-primary/50"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground/80">Apply For Which Post?</Label>
                <Input 
                    id="role" 
                    placeholder="e.g. Flutter Developer" 
                    className="bg-muted/50 border-white/10 focus:border-primary/50"
                    value={formData.role}
                    onChange={handleChange}
                    // If defaultRole is provided, we might want to make this read-only or just pre-filled?
                    // Let's keep it editable but pre-filled.
                />
            </div>

            <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground/80">Years of Experience</Label>
                    <Input 
                    id="experience" 
                    type="number" 
                    min="0" 
                    placeholder="0" 
                    className="bg-muted/50 border-white/10 focus:border-primary/50"
                    value={formData.experience}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="details" className="text-foreground/80">Other Details</Label>
                <Textarea 
                    id="details" 
                    placeholder="Tell us more about yourself..." 
                    className="bg-muted/50 border-white/10 focus:border-primary/50 resize-none h-24"
                    value={formData.details}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label className="text-foreground/80 block mb-2">Upload Your Resume</Label>
                <div className="flex items-center gap-3">
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                    />
                    <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handleFileClick}
                        className="cursor-pointer bg-muted/30 hover:bg-muted/50 border-dashed border-2 border-white/20"
                    >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                    </Button>
                    <span className="text-sm text-muted-foreground truncate max-w-[200px]">{fileName}</span>
                </div>
            </div>

            <Button
                type="submit"
                variant="gradient"
                className="w-full text-lg py-6 mt-4 shadow-lg hover:shadow-primary/20 transition-all duration-300"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        Submit Application
                    </>
                )}
            </Button>
        </form>
    </div>
  );
};

export default ApplicationForm;
