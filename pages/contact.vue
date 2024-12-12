<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class=" py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Information
        </h2>
      </div>
      <!-- Contact Section -->
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16"
      >
        <!-- Address Teaching -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Address Teaching</h2>
          <p class="text-gray-700">
            <strong>Berliner Hochschule für Technik (BHT)</strong><br />
            Fachbereich VII Elektrotechnik<br />
            Studiengang Humanoide Robotik (HROB)<br />
            Luxemburger Str. 10<br />
            13353 Berlin
          </p>
          <p class="mt-4">
            Homepage:
            <a href="#" class="text-blue-500 hover:underline"
              >general directory</a
            ><br />
            Mail:
            <a
              href="mailto:ivo.boblan@bht-berlin.de"
              class="text-blue-500 hover:underline"
              >ivo.boblan(at)bht-berlin.de</a
            ><br />
            Phone:
            <a href="tel:+493045042369" class="text-blue-500 hover:underline"
              >030 4504 2369</a
            ><br />
            Room: House Gauß, floor 1, room B 140
          </p>
          <!-- Map -->
          <div class="mt-6">
            <NuxtImg
              src="images/Beuth_Lageplan_Campus.png"
              alt="Teaching Map"
              class="w-full rounded-2xl shadow aspect-[5/3]"
            />
          </div>
        </div>

        <!-- Address Research -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Address Research</h2>
          <p class="text-gray-700">
            <strong>Berliner Hochschule für Technik (BHT)</strong><br />
            Fachbereich VII Elektrotechnik<br />
            Compliant Robotics Lab (CoRoLab)<br />
            Schwedenstraße 9<br />
            13357 Berlin
          </p>
          <p class="mt-4">
            Homepage:
            <a href="#" class="text-blue-500 hover:underline">personally</a
            ><br />
            Mail:
            <a
              href="mailto:info@biorobotiklabor.de"
              class="text-blue-500 hover:underline"
              >info(at)biorobotiklabor.de</a
            ><br />
            Phone:
            <a href="tel:+493045047852" class="text-blue-500 hover:underline"
              >030 4504 7852</a
            ><br />
            Room: No. 9, floor 5, room SWS 530
          </p>
          <!-- Map -->
          <div class="mt-6">
            <NuxtImg
              src="images/Beuth_Lageplan_Schwedenstrasse.png"
              alt="Research Map"
              class="w-full rounded-2xl shadow aspect-[5/3]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
