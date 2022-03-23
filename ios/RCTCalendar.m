#import "RCTCalendar.h"
#import <React/RCTLog.h>

@implementation DummyCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
