"use client";

import { Box, Typography, Button, Paper, Stack, Avatar, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value && !emailRegex.test(e.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    // Validate name
    if (!name.trim()) {
      setNameError('Name is required.');
      valid = false;
    } else {
      setNameError('');
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }
    // Validate message
    if (!message.trim()) {
      setMessageError('Message is required.');
      valid = false;
    } else {
      setMessageError('');
    }
    if (!valid) return;
    // Submit logic here
  };

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      {/* Main Content */}
      <Box className="w-full bg-[#e3f4fb] py-10 px-4 md:px-0">
        <Box className="container mx-auto max-w-7xl py-6 md:py-10 px-4 md:px-0 flex flex-col gap-12">
       
        {/* Alliance Atlantic HR Consulting Info Section */}
        <Box
          sx={{
            background: '#fff',
            borderRadius: 3,
            p: { xs: 2, md: 4 },
            mb: 4,
            boxShadow: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Avatar
            src="/images/alliance.svg"
            alt="Alliance Atlantic"
            sx={{ width: 72, height: 72, bgcolor: '#fff', boxShadow: 1 }}
          />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 1 }}>
              Alliance Atlantic HR Consulting
            </Typography>
            <Typography variant="body1" sx={{ color: '#333', mb: 1 }}>
              Empowering organizations to build high-performing teams, drive transformation, and unlock people potential. Our HR consulting services are tailored to your unique business needs, ensuring sustainable growth and a thriving workplace.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src="/images/icons/1.svg" sx={{ width: 28, height: 28 }} />
                <Typography variant="subtitle2" sx={{ color: '#0077b6' }}>Strategic HR Solutions</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src="/images/icons/2.svg" sx={{ width: 28, height: 28 }} />
                <Typography variant="subtitle2" sx={{ color: '#0077b6' }}>Leadership Development</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src="/images/icons/3.svg" sx={{ width: 28, height: 28 }} />
                <Typography variant="subtitle2" sx={{ color: '#0077b6' }}>Performance Management</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

         {/* Centered Page Title */}
        <Typography variant="h4" align="center" sx={{ letterSpacing: 4, fontWeight: 400, mb: 4 }}>
          CONTACT US
        </Typography>
        {/* Two-column layout using flexbox */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center', justifyContent: 'center' }}>
          {/* Left: Contact Form */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, boxShadow: 'none', background: 'transparent' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Send us a message!
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                  fullWidth
                  required
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  InputProps={{ style: { fontFamily: 'serif' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#00AAFF',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#00AAFF',
                    },
                  }}
                />
                {nameError && (
                  <Typography sx={{ color: 'red', fontSize: 16, mt: 0, mb: 1 }}>
                    {nameError}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  required
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={handleEmailChange}
                  error={!!emailError}
                  InputProps={{ style: { fontFamily: 'serif' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#00AAFF',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#00AAFF',
                    },
                  }}
                />
                {emailError && (
                  <Typography sx={{ color: 'red', fontSize: 16, mt: 0, mb: 1 }}>
                    {emailError}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  required
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  minRows={6}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  InputProps={{ style: { fontFamily: 'serif' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#00AAFF',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#00AAFF',
                    },
                  }}
                />
                {messageError && (
                  <Typography sx={{ color: 'red', fontSize: 16, mt: 0, mb: 1 }}>
                    {messageError}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: '#00AAFF',
                      color: '#fff',
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      '&:hover': { background: '#00AAFF' },
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
          {/* Right: Image */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 600, aspectRatio: '16/10', position: 'relative' }}>
              <Image
                src="/images/contact-us.png" // Replace with your actual image path
                alt="Contact Us"
                fill
                style={{ objectFit: 'cover', borderRadius: 8 }}
                sizes="(max-width: 900px) 100vw, 600px"
              />
            </Box>
          </Box>
        </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
} 