import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  ShoppingFill,
  FolderViewOutline, HomeOutline,
  TableOutline, AppstoreOutline,
  BuildOutline,
  FormOutline,
  BoldOutline,
  DollarOutline,
  CalendarOutline,
  MoreOutline
} from '@ant-design/icons-angular/icons';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { DashboardSaleComponent } from './dashboard-sale/dashboard-sale.component';
import { TableComponent } from './table/table.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { RevenueComponent } from './dashboard-sale/revenue/revenue.component';
import { CreateReportCardComponent } from './dashboard-sale/create-report-card/create-report-card.component';
import { DailySaleCardComponent } from './dashboard-sale/daily-sale-card/daily-sale-card.component';
import { SummaryCardComponent } from './dashboard-sale/summary-card/summary-card.component';
import { TotalOrderComponent } from './dashboard-sale/total-order/total-order.component';
import { TransactionCardComponent } from './dashboard-sale/transaction-card/transaction-card.component';
import { NewsUpdateCardComponent } from './dashboard-sale/news-update-card/news-update-card.component';
import { AccountInfoCardComponent } from './dashboard-sale/account-info-card/account-info-card.component';
import { DatePickerCardComponent } from './dashboard-sale/date-picker-card/date-picker-card.component';

const icons: IconDefinition[] = [
  ShoppingFill,
  FolderViewOutline,
  HomeOutline,
  TableOutline,
  AppstoreOutline,
  BuildOutline,
  FormOutline,
  BoldOutline,
  DollarOutline,
  CalendarOutline,
  MoreOutline];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuSideComponent,
    DashboardSaleComponent,
    TableComponent,
    ContentHeaderComponent,
    RevenueComponent,
    CreateReportCardComponent,
    DailySaleCardComponent,
    SummaryCardComponent,
    TotalOrderComponent,
    TransactionCardComponent,
    NewsUpdateCardComponent,
    AccountInfoCardComponent,
    DatePickerCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzIconModule.forRoot(icons),
    NzMenuModule,
    NzLayoutModule,
    AppRoutingModule,
    NzInputModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzTableModule,
    NzTagModule,
    NzSegmentedModule,
    NzProgressModule,
    NzListModule,
    NzDropDownModule,
    NzDatePickerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
