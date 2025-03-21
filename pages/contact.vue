<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="pb-24 pt-12 sm:py-32 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Information
        </h2>
      </div>
      <!-- Contact Section -->
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16"
      >
        <!-- Postal Address -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Postal Address</h2>
          <p class="text-gray-700">
            <NuxtLink
              to="https://www.bht-berlin.de/"
              class="text-blue-500 hover:underline"
              target="_blank"
              ><strong>Berliner Hochschule für Technik (BHT)</strong>
            </NuxtLink>
            <br />
            Poststelle, FB7, HROB, Prof.Boblan
            <br />
            <NuxtLink
              to="https://www.bht-berlin.de/lageplan"
              class="text-blue-500 hover:underline"
              target="_blank"
              >Luxemburger Str. 10
            </NuxtLink>
            <br />
            13353 Berlin
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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

        <!-- Teaching & Research Address -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Teaching & Research Address</h2>
          <p class="text-gray-700">
            <NuxtLink
              to="https://www.bht-berlin.de/"
              class="text-blue-500 hover:underline"
              target="_blank"
              ><strong>Berliner Hochschule für Technik (BHT)</strong>
            </NuxtLink>
            <br />
            <NuxtLink
              to="https://www.bht-berlin.de/vii"
              class="text-blue-500 hover:underline"
              target="_blank"
              >Fachbereich VII Elektrotechnik
            </NuxtLink>
            <br />
            <NuxtLink
              to="https://www.bht-berlin.de/b-hrob"
              class="text-blue-500 hover:underline"
              target="_blank"
              >Studiengang Humanoide Robotik (HROB)
            </NuxtLink>
            <br />
            Compliant Robotics Lab (CoRoLab)<br />
            <NuxtLink
              to="https://www.bht-berlin.de/126"
              class="text-blue-500 hover:underline"
              target="_blank"
              >Kurfürstenstrasse 141
            </NuxtLink>
            <br />
            10785 Berlin
          </p>
          <p class="mt-4">
            Homepage:
            <NuxtLink
              to="https://www.bht-berlin.de/people/detail/1720/"
              class="text-blue-500 hover:underline"
              target="_blank"
              >general directory
            </NuxtLink>
            , 
            <NuxtLink
              to="https://prof.bht-berlin.de/boblan/"
              class="text-blue-500 hover:underline"
              target="_blank"
              >personally
            </NuxtLink>
            <br />
            Mail:
            <NuxtLink
              to="mailto:ivo.boblan@bht-berlin.de"
              class="text-blue-500 hover:underline"
              target="_blank"
              >ivo.boblan(at)bht-berlin.de
            </NuxtLink>
            <br />
            Phone:
            <NuxtLink
              to="tel:+493045047852"
              class="text-blue-500 hover:underline"
              target="_blank"
              >030 4504 7852
            </NuxtLink>
            <br />
            Room: front building, floor 3, room K._030.023
          </p>
          <!-- Map -->
          <div class="mt-6">
            <NuxtImg
              src="images/Beuth_Lageplan_Kurfuerstenstrasse.png"
              alt="Research Map"
              class="w-full rounded-2xl shadow aspect-[5/3]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
