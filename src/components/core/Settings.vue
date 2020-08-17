<template>
  <div>
    <v-row
      justify="center"
    >
      <v-btn
        color="indigo"
        class="ml-3"
        dark
        icon
        @click="dialog = true"
      >
        <v-icon>mdi-settings</v-icon>
      </v-btn>

        <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        >
        <v-card tile>
            <v-toolbar
            flat
            dark
            color="indigo darken-2"
            >
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- <v-btn
                dark
                text
                @click="dialog = false"
                >
                Save
                </v-btn> -->
            </v-toolbar-items>
            <v-menu
                bottom
                right
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </template>
                <!--  -->
                <v-card class="text-center">
                  <v-card-text>
                    <v-row no-gutters justify="center">
                      <p class="body-1">johndeo@thecrossift.com</p>
                    </v-row>
                  </v-card-text>
                </v-card>
            </v-menu>
            </v-toolbar>
            <v-card-text>
            <v-container></v-container>
            <v-list
                three-line
                subheader
            >
                <v-list-item>
                  <v-row>
                    <v-col cols="12" md="6" sm="12">
                      <v-avatar size="60">
                        <v-img
                          src="../../assets/female.svg"
                          lazy-src="../../assets/female.svg"
                        ></v-img>
                      </v-avatar>
                      <p class="overline mt-2">change avatar</p>
                      <v-file-input
                        :rules="rules"
                        outlined
                        color="indigo"
                        chips
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Avatar"
                      ></v-file-input>
                    </v-col>

                    <v-col cols="12" md="6" sm="12">
                      <v-avatar tile size="60">
                        <v-img
                          src="../../assets/books.png"
                          lazy-src="../../assets/books.png"
                          cover
                        ></v-img>
                      </v-avatar>
                      <p class="overline mt-2">change cover picture</p>
                      <v-file-input
                        :rules="rules"
                        outlined
                        color="indigo"
                        chips
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="change cover picture"
                        prepend-icon="mdi-camera"
                        label="Avatar"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-list-item>
                <v-list-item>
                <v-list-item-content>
                    <v-row>
                      <v-col cols="12" md="12" sm="12">
                        <v-card max-width="100%" class="ml-5" flat>
                          <v-toolbar flat>
                            <span><v-icon color="indigo">mdi-pen</v-icon></span><v-toolbar-title class="ml-4 grey--text text--darken">Update your profile </v-toolbar-title>
                          </v-toolbar>
                          <v-divider></v-divider>
                          <v-container>
                            <v-row>
                              <v-col>
                                <v-list >
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="yellow darken-1" dark>mdi-email</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">johndeo@thecrossift.com</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update email address</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <update-email />
                                    </v-list-item-action>
                                  </v-list-item>
                                  <!--  update username -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-face</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">John_D</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update username</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <user-name />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update name -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-account</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">John Deo</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update name</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <update-name />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update gender -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-gender-male-female</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">Null</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update gender</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <gender />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update occupation -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-briefcase</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">Journalist</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update occupation</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <occupation />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update password -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-lock</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">********</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update password</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <update-pass />
                                    </v-list-item-action>
                                  </v-list-item>
                                </v-list>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-col>
                    </v-row>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
               
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                three-line
                subheader
            >
                <v-subheader>General</v-subheader>
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Notify me about updates to apps and posts</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Auto-add widgets</v-list-item-title>
                    <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-container></v-container>
              <v-divider class="mt-3 mb-5 mx-5"></v-divider>
              <v-subheader inset class="red--text body-1">Danger Zone</v-subheader>
              <v-container></v-container>
              <v-card max-width="50%">
                <v-container>
                  <v-card-text class="title">Delete Account</v-card-text>
                  <v-card-text>
                    <v-alert
                      border="left"
                      colored-border
                      type="error"
                      elevation="0"
                    >
                      This action <span class="font-weight-bold">cannot</span> be undone. This will permanently  delete your account, and all files and data cannot be recovered.
                    </v-alert>
                  </v-card-text>
                  <v-text-field
                    label="Email"
                    type="email"
                    color="red"
                    outlined
                    placeholder="johndeo@thrcrossift.com"
                  >
                  </v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <delete-account />
                  </v-card-actions>
                </v-container>
              </v-card>
            </v-card-text>

            <div style="flex: 1 1 auto;"></div>
            <v-card flat>
              
            </v-card>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
              dark
              @click="dialog3 = !dialog3"
            >
              Open Dialog 3
            </v-btn>
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog3 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import updateName from '../Auth/update/updateName.vue';
import updateGender from '@/components/Auth/update/updateGender.vue';
import updateUsername from '@/components/Auth/update/updateUsername.vue';
import Occupation from '@/components/Auth/update/updateOccupation.vue';
import Password from '@/components/Auth/update/updatePassword.vue';
import updateEmail from '@/components/Auth/update/updateEmail.vue';
import deleteAccount from '@/components/Auth/DeleteAccount.vue'

  export default {
    components: {
      'update-name': updateName,
      'user-name': updateUsername,
      'gender': updateGender,
      'occupation': Occupation,
      'update-pass': Password,
      'update-email': updateEmail,
      'delete-account': deleteAccount,
    },

    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me 2',
          },
        ],
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
      }
    },
  }
</script>