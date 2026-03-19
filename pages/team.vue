<template>
  <div v-if="indexContent">
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <PageHeading
          :title="indexContent.title"
          :description="indexContent.description"
        />
        <div class="mb-6 lg:mb-16 max-w-4xl mx-auto">
          <div
            v-for="(role, role_index) in roles"
            :key="role_index"
            class="flex flex-col space-y-4 mt-10"
          >
            <h2
              v-if="
                teamMembers?.filter((person) => person.role === role).length > 0
              "
              class="text-xl font-bold tracking-tight"
            >
              {{ role }}
            </h2>
            <div
              v-for="(person, person_index) in teamMembers?.filter(
                (person) => person.role === role
              )"
              :key="person_index"
              class="flex bg-bhtgray-500 border border-bhtgray-400 rounded-lg shadow sm:flex items-stretch"
            >
              <NuxtImg
                :src="person.image"
                class="rounded-l-lg max-w-40 object-cover"
              />
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">{{
                    person.name + (person.extern ? ` (${person.extern})` : "")
                  }}</a>
                </h3>
                <span class="text-gray-500">{{ person.role }}</span>
                <p class="mt-3 mb-4 font-light text-gray-500">
                  {{ person.description }}
                </p>
                
                <ul class="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <!-- LinkedIn-Logo -->
                        <path
                          fill-rule="evenodd"
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <!-- GitHub-Logo -->
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <!-- Homepage-Logo -->
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: allTeam } = await useAsyncData("team-members", () =>
  queryContent("/team").find()
);

const indexContent = computed(
  () =>
    allTeam.value?.find((person) => person._file === "team/_index.md") ?? null
);

const teamMembers = computed(() => {
  return (
    allTeam.value
      ?.filter((person) => person._file !== "team/_index.md")
      .sort((a, b) => {
        const lastNameA = a.name.split(" ").pop().toLowerCase();
        const lastNameB = b.name.split(" ").pop().toLowerCase();
        return lastNameA.localeCompare(lastNameB);
      }) ?? []
  );
});

const roles = computed(() => indexContent.value?.roles ?? []);
</script>
