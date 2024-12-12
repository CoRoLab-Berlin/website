<template>
  <div class="bg-bhtgray-700">
    <Hero
      title="Compliant Robotic Lab"
      subtitle="Soft design and control stiff - be inherently safe"
      image="/images/2022-mgasch-DSCF0972__680x510.jpg"
    />
    <ContentSection
      class="my-16 lg:my-24"
      :title="content.title"
      :text="content.text"
      :images="content.images"
    />
    <Logos class="my-16 lg:my-24" :images="logos" />
  </div>
</template>

<script setup lang="ts">
const content = {
  title: "Welcome To Our Homepage",
  text: `You find information on activities of the laboratory for compliant robotic systems for applications in the safe human-robot interaction.

  We think that the inherent compliance of systems is the key for safe interaction between humans and robots. Passive compliant systems will follow without delay and without active control, which always associated with signal delays, an external contact force. The compliance and resilience can be implemented in both the actuators and in the supporting structure. Compliant actuators have the advantage that they both respond inherently passive compliant and on a control actively be adjusted within limits. Is the required compliance for a given task in a constant and a variable part separable, the constant part may be transferred to the passive mechanical construction. This structural compliance is entirely passive, but can be detected by suitable sensors and possibly mechanically altered. The overall compliance reduced by the passive part also leads to a lower control effort.

  In what way which part of the required total compliance be divided between the construction and the actuators is subject and mission of our lab. Focus are the themes of new materials and manufacturing technologies for lightweight and sustainable constructions and control compliant actuators for safe human-technology interaction.

  We wish you an interesting and pleasant stay on our pages.`,
  images: [
    "/images/IMG_20180418_163023__680x510_mLogo.jpg",
    "/images/IMG_20180416_223402__680x510_mLogo.jpg",
    "/images/_Festo--BionicMotionRobot__snap_1er_1__680x510_mLogo.png",
    "/images/_Festo--BionicMotionRobot__snap_3er_2__680x510_mLogo.png",
    "/images/BROMMI-TAK__Pose4_800x600_text-en.jpg",
    "/images/BROMMI-TAK__TUB-180513170513-31_700x510_text.jpg",
    "/images/BROMMI-TAK__assistant_in_the_assembly_0001_640x480_text-en.jpg",
    "/images/BROMMI-TAK__assistant_in_the_assembly_0022_800x600_text-en.jpg",
    "/images/BROMMI-TAK__assistant_in_the_household_10014_800x600_text-en.jpg",
    "/images/zar5-GreifPositionen_1.png",
    "/images/zar5-GreifPositionen_4.png",
    "/images/zar5-HM06-Merkel-05_cr.png",
    "/images/zar5-HM06-Merkel-07_cr.png",
  ],
};

const logos = [
  "/images/logos/BHT_Logo_kompakt_horizontal_Anthrazit_RGB_144ppi.png",
  "/images/logos/CarlStahl_310x135.png",
  "/images/logos/Festo_200x63.png",
  "/images/logos/SachEng._400x175.jpg",
  "/images/logos/TU-Berlin_360x114.png",
  "/images/logos/VDI-VDE-IT_200x63.png",
];
</script>
